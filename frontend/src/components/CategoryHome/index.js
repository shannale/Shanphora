import { useEffect } from "react"; 
import { useSelector, useDispatch} from "react-redux";
import { fetchAllProducts } from "../../store/product";
import CategoryHomeIndex from "../CategoryHomeIndex";

export const CategoryHome = ({ category }) => {
  const products = useSelector((state) => Object.values(state.products));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
    <div className="products-home-home">
      <div className="products-home">
        <div className="index-title"> </div>
        {products.map((product) =>
          product.category === category ? (
            <div
              key={product.id}
              className="product-item"
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("bounce");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove("bounce");
              }}
            >
              <CategoryHomeIndex product={product} />
            </div>
          ) : null
        )}
      </div>

    </div>
    </>
  );
};

export default CategoryHome;