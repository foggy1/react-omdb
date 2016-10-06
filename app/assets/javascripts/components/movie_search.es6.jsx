class MovieSearch extends React.Component {
  render() {
    return(
      <form className="movieSearch">
        <div className="form-group">
          <label htmlFor="t">Movie title:</label>
          <input className="form-control" type="text" name="t"/>
        </div>
        <div className="form-group">
          <label htmlFor="t">Movie year (optional):</label>
          <input className="form-control" type="text" name="y"/>
        </div>
          <input className="btn btn-primary" type="submit" value="Search"/>
      </form>
      )
  }
}