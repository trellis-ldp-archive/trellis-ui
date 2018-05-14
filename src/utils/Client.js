import N3 from 'n3'
import Link from './Link'
import Prefer from './Prefer'
import { LDP, Trellis } from './Vocab'

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

  async fetchAudit(url) {
    const writer = new N3.Writer();
    const rdf = await fetch(url || this.url, { headers: {
        accept: "text/turtle",
        prefer: Prefer.representation(Trellis.PreferAudit,
          [LDP.PreferMinimalContainer, LDP.PreferMembership, LDP.PreferContainment])
      }}).then(res => res.text()).catch(err => '');

    if (rdf.length > 0) {
      new N3.Parser().parse(rdf).forEach(quad => writer.addQuad(quad));
      return new Promise((resolve, reject) => writer.end((err, data) => err ? reject(err) : resolve(data)));
    }
  }

  async fetchResource(url) {
    const writer = new N3.Writer();
    const rdf = await fetch(url || this.url, { headers: {
        accept: "text/turtle",
        prefer: Prefer.representation(LDP.PreferMinimalContainer)
      }}).then(res => res.text()).catch(err => '');

    if (rdf.length > 0) {
      new N3.Parser().parse(rdf).forEach(quad => writer.addQuad(quad));
      return new Promise((resolve, reject) => writer.end((err, data) => err ? reject(err) : resolve(data)));
    }
  }
}

export default Client
