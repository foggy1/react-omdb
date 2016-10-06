class MovieSearch extends React.Component {
  constructor() {
    super();
    this.searchIt = this.searchIt.bind(this);
  }

  searchIt(event) {
    event.preventDefault();
    var params = {
      t: this.refs.titleBox.value,
      y: this.refs.yearBox.value
    }
    $.ajax({
      dataType: "json",
      url: "http://www.omdbapi.com/?",
      data: jQuery.param(params)
    })
    .done(function(response) {
      this.props.searchComplete(response);
    }.bind(this))
  }

  render() {
    return(
      <form ref="searchForm" className="movieSearch" onSubmit={this.searchIt}>
        <div className="form-group">
          <label htmlFor="t">Movie title:</label>
          <input ref="titleBox" className="form-control" type="text" name="t"/>
        </div>
        <div className="form-group">
          <label htmlFor="t">Movie year (optional):</label>
          <input ref="yearBox" className="form-control" type="text" name="y"/>
        </div>
          <input className="btn btn-primary" type="submit" value="Search"/>
      </form>
      )
  }
}