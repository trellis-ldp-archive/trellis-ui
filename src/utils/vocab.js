class AS {
  static getNs() {
    return "https://www.w3.org/ns/activitystreams#"
  }
}

class LDP {
  static getNs() {
    return "http://www.w3.org/ns/ldp#";
  }
  static get PreferMinimalContainer() {
    return this.getNs() + "PreferMinimalContainer";
  }
  static get PreferContainment() {
    return this.getNs() + "PreferContainment";
  }
  static get PreferMembership() {
    return this.getNs() + "PreferMembership";
  }
  static get Resource() {
    return this.getNs() + "Resource";
  }
  static get RDFSource() {
    return this.getNs() + "RDFSource";
  }
  static get NonRDFSource() {
    return this.getNs() + "NonRDFSource";
  }
  static get Container() {
    return this.getNs() + "Container";
  }
  static get BasicContainer() {
    return this.getNs() + "BasicContainer";
  }
  static get DirectContainer() {
    return this.getNs() + "DirectContainer";
  }
  static get IndirectContainer() {
    return this.getNs() + "IndirectContainer";
  }
}

class PROV {
  static getNs() {
    return "http://www.w3.org/ns/prov#"
  }
  static get Activity() {
    return this.getNs() + "Activity"
  }
  static get wasAssociatedWith() {
    return this.getNs() + "wasAssociatedWith"
  }
  static get startedAtTime() {
    return this.getNs() + "startedAtTime";
  }
  static get atTime() {
    return this.getNs() + "atTime";
  }
}

class RDF {
  static getNs() {
    return "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
  }
  static get type() {
    return this.getNs() + "type";
  }
}

class Trellis {
  static getNs() {
    return "http://www.trellisldp.org/ns/trellis#";
  }
  static get PreferAudit() {
    return this.getNs() + "PreferAudit";
  }
}

export { AS, LDP, PROV, RDF, Trellis }
