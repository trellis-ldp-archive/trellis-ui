class Prefer {
  static representation(include, omit) {
    let inc = [];
    let om = [];
    if (include) {
      inc = Array.isArray(include) ? include : [include];
    }
    if (omit) {
      om = Array.isArray(omit) ? omit : [omit];
    }
    return "return=representation; " +
      (om.length ? "omit=\"" + om.join(' ') + "\"; " : "") +
      (inc.length ? "include=\"" + inc.join(' ') + "\"" : "");
  }
  static minimal() {
    return "return=minimal";
  }
}

export default Prefer
