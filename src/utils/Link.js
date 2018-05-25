class Link {
  constructor(header) {
    var items = header.trim().split(/;\s*/);
    this.uri = items[0].replace(/^</, "").replace(/>$/, "");
    this.params = {}
    items.slice(1).map(x => x.split("=", 2)).filter(x => x.length === 2)
      .forEach(x => this.params[x[0]] = x[1].replace(/^"/, "").replace(/"$/, ""));
  }

  get rel() {
    return this.params["rel"];
  }

  static parse(headers) {
    if (headers) {
      return headers.split(/,(?=\s*<)/).map(x => new Link(x));
    } else {
      return [];
    }
  }
}

export default Link
