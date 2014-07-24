class WinesController < ApplicationController
  respond_to :json

  def index
    wines = Wine.all
    respond_with wines
  end

  def create
    wine = Wine.create(wine_params)
    respond_with wine
  end

  private

  def wine_params
    params.require(:wine).permit(:name)
  end

end
