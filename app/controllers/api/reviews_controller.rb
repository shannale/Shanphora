class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]
    wrap_parameters include: Review.attribute_names + ['productId', 'title', 'rating', 'comment']

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end
    
    def show
        @review = Review.find(params[:id])
        render :show
    end
    
    def update
        @review = Review.find(params[:id])
    
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end
    
    private
    def review_params
        params.require(:review).permit(:product_id, :user_id, :rating, :comment, :title)
    end
end
