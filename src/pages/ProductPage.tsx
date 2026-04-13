import { useSelector } from "react-redux";
import type { RootState } from "../store";

const ProductPage = () => {

    const products = useSelector((state: RootState) => state.products.products);
    return (
        <div>
            {
                products.map((p) => (
                    <div key={p.id}>
                        {p.title}
                    </div>
                ))
            }
        </div>
    )
}

export default ProductPage;
