class MovieDisplay extends React.Component {
  render() {
    // let movie = {
    //   Title: 'Fight Club',
    //   Year: '1999',
    //   Posterc: 'http://ia.media-imdb.com/images/M/MV5BMzc1YmU2ZjEtYWIwMC00ZjM3LWI0NTctMDVlNGQ3YmYwMzE5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    //   {lot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.'
    // }
  
    let { Title, Year, Poster, Plot } = this.props.movie_info;
    return(
      <div>
        <h2 className="h2">{Title} ({Year})</h2>
        <img className="img-fluid" src={Poster} />
        <p>Plot: {Plot}</p>
      </div>
      )
  }
}


