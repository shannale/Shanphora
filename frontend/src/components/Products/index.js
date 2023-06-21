import { useEffect } from "react"; 
import { useSelector, useDispatch} from "react-redux";
import { fetchAllProducts } from "../../store/product";

export const Products = () => {
    const products = useSelector((state) => Object.values(state.products));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])


    return (
        <>
            <div>
                {products.map (product => {
                    return (
                        <p>
                            {product.name}
                            {product.brand}
                            {product.description}
                        </p>
                    )
                })}
            </div>
        </>
    )
}
