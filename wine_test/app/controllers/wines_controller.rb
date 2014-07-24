class WinesController < ApplicationController
  respond_to :json

  def index
    wines = Wines.all
    respond_with wines
  end

end
