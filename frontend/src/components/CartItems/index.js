import { useEffect } from "react"; 
import { useSelector, useDispatch} from "react-redux";
import { fetchCartItems } from "../../store/cart";
import CartItemsIndex from "../CartItemsIndex";

export const CartItems = () => {
    const cartItems = useSelector((state) => Object.values(state.cartItems));
    const currentUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    return (
        <>
        <div className="cart-index">
        <div className="cart-title"> My Basket </div>
                {cartItems.map((cartItem) => {
                    {console.log(cartItem)}
                    return (
                        <CartItemsIndex key={cartItem.id} cartItem={cartItem} />
                    )
                })}
        </div>
        </>
    );
};

export default CartItems;