module Movies
  extend ActiveSupport::Concern

  def query(args)
    movie_title = args.fetch(:title)
    year = args.fetch(:year, nil)
    plot = args.fetch(:plot, 'short')
    params = {
      t: movie_title,
      y: year,
      plot: plot,
      r: 'json',
      tomatoes: true
    }.to_query
    uri = URI.parse(URI.encode(("http://www.omdbapi.com/?" + params).strip))
    byebug
    response = JSON.parse(open(uri).read)
    # response = Unirest.get "http://www.omdbapi.com/?",
    #             headers:{ "Accept" => "application/json" },
    #             parameters:params
    # response.body
  end
end