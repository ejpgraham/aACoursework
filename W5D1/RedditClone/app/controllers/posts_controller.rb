class PostsController < ApplicationController
  before_action :ensure_logged_in
  before_action :ensure_current_user_is_author, only: [:edit, :update, :destroy]

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    # debugger

    if @post.save
      redirect_to post_url(@post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      redirect_to post_url(@post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    # sub_id = @post.sub_id
    @post.destroy
    redirect_to post_url(@post.id)
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end

  def ensure_current_user_is_author
    @post = Post.find(params[:id])
    redirect_to subs_url, status: 401 unless current_user.id == @post.author_id
  end
end
