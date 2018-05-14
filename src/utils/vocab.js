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

class Trellis {
  static getNs() {
    return "http://www.trellisldp.org/ns/trellis#";
  }
  static get PreferAudit() {
    return this.getNs() + "PreferAudit";
  }
}

export { LDP, Trellis }
