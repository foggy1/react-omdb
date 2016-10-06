class MoviesController < ApplicationController
  include Movies
  def search
    response = query(relevant_params)
    byebug
  end

  private
  def relevant_params
    params.require(:movie).permit(:title, :year, :plot_length)
  end
end