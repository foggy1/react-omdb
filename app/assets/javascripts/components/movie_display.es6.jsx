class MovieDisplay extends React.Component {
  render() {
    // let { title, img_src, plot } = this.props.data;
    return(
      <div>
        <h2 className="h2">Fight Club (1999)</h2>
        <img className="img-fluid" src="http://ia.media-imdb.com/images/M/MV5BMzc1YmU2ZjEtYWIwMC00ZjM3LWI0NTctMDVlNGQ3YmYwMzE5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
        <p>Plot: An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.</p>
      </div>
      )
  }
}