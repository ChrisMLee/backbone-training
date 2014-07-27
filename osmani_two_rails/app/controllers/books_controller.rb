class BooksController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token

  def index
    books = Book.all
    respond_with books
  end

  def create
    book = Book.create(book_params)
    respond_with book
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy
    respond_with book
  end

  def update
    book = Book.find(params[:id])
    book.update(book_params)
    respond_with book
  end

  private

  def book_params
    params.require(:book).permit(:coverImage, :title, :author, :releaseDate, :keywords)
  end

end
