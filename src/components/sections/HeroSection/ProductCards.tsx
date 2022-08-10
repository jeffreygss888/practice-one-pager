import GSS_PRODUCTS from '../../../models/GSS_PRODUCTS';
import ProductCard from './ProductCard';

const ProductCards = () => (
  <ul className="grid items-center justify-center gap-10 lg:grid-cols-2">
    {GSS_PRODUCTS.map((gssProdData) => (
      <ProductCard
        key={gssProdData.title}
        title={gssProdData.title}
        description={gssProdData.description}
      />
    ))}
  </ul>
);

export default ProductCards;
