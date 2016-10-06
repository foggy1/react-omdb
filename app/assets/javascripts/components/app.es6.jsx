class App extends React.Component {
  componentDidMount() {
    $('.btn').click(function(e) {
      e.preventDefault();
      data = $('.movieSearch').serialize();
      $.ajax({
        dataType: "json",
        url: "http://www.omdbapi.com/?",
        data: data,
      })
      .done(function(response) {
        debugger;

      })
    })
  }
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