interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard = ({ title, description }: ProductCardProps) => (
  <li className="relative grid aspect-square max-w-xs list-none justify-center gap-4 rounded-md bg-slate-200 p-4 shadow md:aspect-video md:max-w-sm">
    <h1 className="border-b-2 border-blue-500 text-center">{title}</h1>
    <p>{description}</p>
  </li>
);

export default ProductCard;
