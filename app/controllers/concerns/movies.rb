module Movies
  BASE_URL = 'http://www.omdbapi.com/?'
  def querify(movie_title, year=nil, plot='short')
    params = {
      t: movie_title,
      y: year,
      plot: plot,
      r: 'json',
      tomatoes: true
    }
  end
end