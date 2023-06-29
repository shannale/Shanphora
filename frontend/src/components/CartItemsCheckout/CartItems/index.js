import { useEffect } from "react"; 
import { useSelector, useDispatch} from "react-redux";
import { fetchCartItems } from "../../../store/cart";
import CartItemsIndex from "../CartItemsIndex";
// import CheckoutItems from "../../CheckoutItems";
import CheckoutItems from "../CheckoutItems";

export const CartItems = () => {
    const cartItems = useSelector((state) => Object.values(state.cartItems));
    // const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    return (
        <>
        <div className="cart-index">
        <div className="cart-title"> My Basket</div> 
        <div className="cart-container">
            <div className="cart-products">
                    {cartItems.map((cartItem) => {
                        return (
                            <CartItemsIndex key={cartItem.id} cartItem={cartItem} />
                            )
                        })}
            </div>
            <div className="checkout-container">
                <div className="check-out-container-contents">
                    <CheckoutItems cartItems={cartItems}/>
                </div>
            </div>
        </div>

        </div>
        </>
    );
};

export default CartItems;