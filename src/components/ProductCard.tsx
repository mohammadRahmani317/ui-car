import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({
                                        product,
                                        onClick,
                                    }: {
    product: Product;
    onClick: () => void;
}) {
    return (
        <div
            className="rounded-xl p-4 shadow-md hover:shadow-xl transition cursor-pointer bg-white"
            onClick={onClick}
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-red-600 font-bold text-md">برای تهیه محصول لطفاً تماس بگیرید</p>
        </div>
    );
}