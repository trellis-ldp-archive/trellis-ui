import { Parser, Writer, Store } from 'n3'
import Link from './Link'
import Prefer from './Prefer'
import { LDP, Trellis, RDF, PROV, AS } from './Vocab'

class Client {

  constructor(url) {
    this.url = url;
  }

  async fetchHead(url) {
    const res = await fetch(url || this.url, {method: 'HEAD'});
    const data = {
      types: Link.parse(res.headers.get("Link")).filter(l => l.rel === "type").map(l => l.uri),
      mementos: Link.parse(res.headers.get("Link")).filter(l => l.rel === "memento")
    }
    if (!res.ok) {
      data.err = res.statusText
    }
    return data;
  }

  async fetchQuads(url, headers) {
    const rdf = await fetch(url || this.url, { headers: headers }).then(res => res.text()).catch(err => '');
    return rdf.length > 0 ? new Parser().parse(rdf) : [];
  }

  async serializeQuads(quads = []) {
    const writer = new Writer();
    quads.forEach(q => writer.addQuad(q));
    return new Promise((resolve, reject) =>
      writer.end((err, data) => err ? reject(err) : resolve(data)));
  }

  async fetchAudit(url) {
    const store = new Store();
    store.addQuads(await this.fetchQuads(url, {
        accept: "text/turtle",
        prefer: Prefer.representation(Trellis.PreferAudit,
          [LDP.PreferMinimalContainer, LDP.PreferMembership, LDP.PreferContainment])
      }));

    return store.getSubjects(RDF.type, PROV.Activity).map(s => ({
        agent: store.getObjects(s, PROV.wasAssociatedWith).map(o => o.value)[0],
        event: store.getObjects(s, RDF.type).map(o => o.value).find(o => o.startsWith(AS.getNs())),
        date: (
          store.getObjects(s, PROV.atTime)[0] || store.getObjects(s, PROV.startedAtTime)[0] || {}
        ).value
      }))
  }

  async fetchResource(url) {
    return this.serializeQuads(await this.fetchQuads(url, {
      accept: "text/turtle",
      prefer: Prefer.representation(LDP.PreferMinimalContainer)
    }));
  }

  async fetchMembership(url) {
    return this.fetchQuads(url, {
      accept: "text/turtle",
      prefer: Prefer.representation(Trellis.PreferMembership, [LDP.PreferMinimalContainer, LDP.PreferContainment])
    });
  }

  async fetchContainment(url) {
    return this.fetchQuads(url, {
      accept: "text/turtle",
      prefer: Prefer.representation(Trellis.PreferContainment, [LDP.PreferMinimalContainer, LDP.PreferMembership])
    }).then(quads => quads.map(q => q.object.value));
  }
}

export default Client
