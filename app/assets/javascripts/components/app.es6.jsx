class App extends React.Component {
  render() {
    
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-1">
            <MovieSearch />
          </div>
          <div className="col-sm-4 col-sm-offset-2">
            <MovieDisplay />
          </div>
        </div>
      </div>
      )
  }
}