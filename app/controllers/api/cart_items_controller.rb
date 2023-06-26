class Api::CartItemsController < ApplicationController
  before_action :require_logged_in

  def index
    @cart_items = CartItem.where(user_id: current_user.id)
  end

  def create
  end

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :quantity)
  end
end
