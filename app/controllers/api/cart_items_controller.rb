class Api::CartItemsController < ApplicationController
      before_action :require_logged_in

      def index
        @cart_items = CartItem.where(user_id: current_user.id)
      end

      def show 
        @cart_item = CartItem.find(params[:id]) 
        render :show
      end 

      def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render :show
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end 
      end

      def update   
        @cart_item = CartItem.find(params[:id])
        
        if @cart_item.update(cart_item_params)
          render :index
        else
          render json: @cart_item.errors.full_messages, status: 422
        end
      end

      def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :index
      end

      private
      def cart_item_params
        params.require(:cart_item).permit(:product_id, :user_id, :quantity)
      end
end
