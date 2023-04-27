class SearchView {
  // Private field
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".search__field").value;
    this._clearView();
    return query;
  } 

  _clearView() {
    this._parentEl.querySelector(".search__field").value = "";
  }
  
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

// module.exports = SearchView;

export default new SearchView(); // We're exporting an instance (Object) created by this class.