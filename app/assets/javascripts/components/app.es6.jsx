class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie_info: {}
    };
  }
  componentDidMount() {
    this.setState({movie_info: {"Title":"Fight Club","Year":"1999","Rated":"R","Released":"15 Oct 1999","Runtime":"139 min","Genre":"Drama","Director":"David Fincher","Writer":"Chuck Palahniuk (novel), Jim Uhls (screenplay)","Actors":"Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier","Plot":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.","Language":"English","Country":"USA, Germany","Awards":"Nominated for 1 Oscar. Another 10 wins & 31 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMzc1YmU2ZjEtYWIwMC00ZjM3LWI0NTctMDVlNGQ3YmYwMzE5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"66","imdbRating":"8.8","imdbVotes":"1,359,025","imdbID":"tt0137523","Type":"movie","Response":"True"}})
  }

  updateInfo(response) {
    debugger;
  }

  render() {



    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-1">
            <MovieSearch searchComplete={this.updateInfo}/>
          </div>
          <div className="col-sm-4 col-sm-offset-2">
            <MovieDisplay movie_info={this.state.movie_info}/>
          </div>
        </div>
      </div>
      )
  }
}