class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session

  before_action :allow_cross_origin_resources
  private

  def allow_cross_origin_resources
    headers['Access-Control-Allow-Origin'] = '*'
  end

end
