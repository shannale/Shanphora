import { useEffect } from "react"; 
import { useSelector, useDispatch} from "react-redux";
import { fetchAllProducts } from "../../store/product";
import { fetchCartItems } from "../../store/cart";
import ProductIndexItem from "../ProductIndexItem/index.js";

export const Products = () => {
    const products = useSelector((state) => Object.values(state.products));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchCartItems())
    }, [dispatch])




    return (
        <>
        <div className="product-index">
        <div className="index-title"> Makeup </div>
                {products.map((product) => (
                    <ProductIndexItem key={product.id} product={product} />
                ))}
        </div>
        </>
    );
};

export default Products;



