import Container from "@/app/components/Container";
import ProductDetail from "./ProductDetail";
import { product } from "@/utils/product";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);
  return (
    <div className="p-8">
      <Container>
        <ProductDetail product={product} />
      </Container>
    </div>
  );
};

export default Product;
