
const CheckoutItems = () => {
    return (
        <>
            <div className="subtotal-checkout"> Merchandise Subtotal </div>
            <div className="shipping-checkout"> Shipping and Handling </div>
            <hr className="checkout-break"></hr>
            <div className="estimated-total"> Estimated Total </div>
            <button className="checkout-button">
                Checkout Items
            </button>
        </>
    )
}

export default CheckoutItems