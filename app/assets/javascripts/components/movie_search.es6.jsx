class MovieSearch extends React.Component {
  constructor() {
    super();
    this.searchIt = this.searchIt.bind(this);
  }

  searchIt(event) {
    event.preventDefault();
    var params = {
      t: this.refs.titleBox.value,
      y: this.refs.yearBox.value,
      type: 'movie'
    }
    $.ajax({
      accepts: 'application/json',
      url: "http://www.omdbapi.com/?",
      data: jQuery.param(params)
    })
    .done(response => {
      this.refs.titleBox.value = ''
      this.refs.yearBox.value = ''
      this.props.searchComplete(response);
    })
  }

  render() {
    return(
      <form ref="searchForm" className="movieSearch" onSubmit={this.searchIt}>
        <div className="form-group">
          <label htmlFor="t">Movie title:</label>
          <input ref="titleBox" className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="t">Movie year (optional):</label>
          <input ref="yearBox" className="form-control" type="text"/>
        </div>
          <input className="btn btn-primary" type="submit" value="Search"/>
      </form>
      )
  }
}
