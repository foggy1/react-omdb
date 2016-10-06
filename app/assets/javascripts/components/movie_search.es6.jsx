class MovieSearch extends React.Component {

  searchIt(e) {
    e.preventDefault();
    data = this.refs.searchForm.serialize();
    $.ajax({
      dataType: "json",
      url: "http://www.omdbapi.com/?",
      data: data,
    })
    .done(function(response) {
      debugger;
      this.setState({movie_info: response});
    })
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