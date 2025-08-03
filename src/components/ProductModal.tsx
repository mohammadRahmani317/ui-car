'use client';

import Image from 'next/image';
import { Product } from '@/data/productsMock';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
    product: Product;
    onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    key="modal"
                    className="bg-white rounded-2xl shadow-xl max-w-xl w-full mx-4 overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* تصویر با ارتفاع ثابت */}
                    <div className="relative w-full h-[250px]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* متن و اطلاعات تماس */}
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            {product.name}
                        </h2>

                        <p className="text-base text-gray-700 leading-relaxed">
                            برای تهیه محصول لطفاً با شماره زیر تماس بگیرید یا به آدرس زیر مراجعه کنید:
                        </p>

                        <div className="mt-4 text-sm text-gray-800 space-y-1">
                            <p>📞 ۰۹۱۹۹۰۹۰۹۸۹</p>
                            <p>📍 تهران، خیابان آزادی، پلاک ۲۵</p>
                        </div>

                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                        >
                            بستن
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
