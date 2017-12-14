class Api::BlogsController < ApplicationController
  before_action :find_blog, only: [:show, :update, :destroy]

  def index
    render json: Blog.order(created_at: :desc)
  end

  def show
  end

  def create
    blog = Blog.create(blog_params)
    if blog.save
      render json: blog
    else
      render json: {errors: blog.error.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @blog.destroy
  end

  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: {errors: @blog.error.full_messages.join(',')}, status: 422
    end
  end

  private
    def find_blog
      @blog = Blog.find(params[:id])
    end

    def blog_params
      params.require(:blog).permit(:name, :body)
    end

end
