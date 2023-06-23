import { useEffect } from "react"; 
import { useSelector, useDispatch} from "react-redux";
import { fetchAllProducts } from "../../store/product";
import CategoryHomeIndex from "../CategoryHomeIndex";

export const CategoryHome = ({category}) => {
    const products = useSelector((state) => Object.values(state.products));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])


    return (
        <>
        <div className="products-home">
        <div className="index-title"> </div>
                {products.map((product) => (
                    product.category === category ? <CategoryHomeIndex key={product.id} product={product}/> : null
                ))}
        </div>
        </>
    );
};

export default CategoryHome;