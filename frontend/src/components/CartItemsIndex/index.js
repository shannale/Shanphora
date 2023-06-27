import { Redirect } from "react-router-dom";

const CartItems = () => { 
	return (
		<div>
            <button style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', appearance: 'none', outline: 'none'}} onClick={handleClick}>
                <Redirect to='/' />
            </button>
		</div>
	);
};
export default CartItems;