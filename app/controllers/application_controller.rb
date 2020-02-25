class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def render_404
    render file: "#{Rails.root}/public/404.html", layout: false, status: :not_found
  end
end
