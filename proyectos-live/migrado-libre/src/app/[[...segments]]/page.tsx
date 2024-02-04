import {getProducts} from "../../services";
import Products from "../../components/Products";

interface CategoryProps {
  params: {
    segments?: string[];
  };
}

export default async function ProductPage({params: {segments}}: CategoryProps) {
  const category = segments?.[0];
  const products = await getProducts(category);

  return (
    <div>
      <Products products={products} />
      <div>Category</div>
    </div>
  );
}
