class MovieDisplay extends React.Component {
  render() {
    // let { title, year, img_src, plot } = this.props.data;
    let movie = {
      title: 'Fight Club',
      year: '1999',
      img_src: 'http://ia.media-imdb.com/images/M/MV5BMzc1YmU2ZjEtYWIwMC00ZjM3LWI0NTctMDVlNGQ3YmYwMzE5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      plot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.'
    }
  
    let { title, year, img_src, plot } = movie;
    return(
      <div>
        <h2 className="h2">{title} ({year})</h2>
        <img className="img-fluid" src={img_src} />
        <p>Plot: {plot}</p>
      </div>
      )
  }
}