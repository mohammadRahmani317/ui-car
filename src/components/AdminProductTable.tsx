'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/productsMock';

interface AdminProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (productId: number) => void;
    onToggleBestSeller: (productId: number) => void;
}

export default function AdminProductTable({
    products,
    onEdit,
    onDelete,
    onToggleBestSeller
}: AdminProductTableProps) {
    const [sortField, setSortField] = useState<'name' | 'brand' | 'price'>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSort = (field: 'name' | 'brand' | 'price') => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const filteredAndSortedProducts = products
        .filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            let aValue = a[sortField];
            let bValue = b[sortField];
            
            if (sortField === 'price') {
                aValue = a.price;
                bValue = b.price;
            }
            
            if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    };

    const getSortIcon = (field: 'name' | 'brand' | 'price') => {
        if (sortField !== field) return '↕️';
        return sortDirection === 'asc' ? '↑' : '↓';
    };

    return (
        <div className="space-y-4">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="جستجو در محصولات..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg py-3 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400"
                    />
                </div>
                <div className="text-sm text-gray-600">
                    {filteredAndSortedProducts.length} محصول از {products.length}
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                <table className="w-full text-right">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-sm font-medium text-gray-700">تصویر</th>
                            <th 
                                className="px-6 py-3 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSort('name')}
                            >
                                نام محصول {getSortIcon('name')}
                            </th>
                            <th 
                                className="px-6 py-3 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSort('brand')}
                            >
                                برند {getSortIcon('brand')}
                            </th>
                            <th 
                                className="px-6 py-3 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSort('price')}
                            >
                                قیمت {getSortIcon('price')}
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-700">محبوب</th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-700">عملیات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredAndSortedProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="w-16 h-12 relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                    <div className="text-xs text-gray-500">ID: {product.id}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        product.brand === 'kia' 
                                            ? 'bg-blue-100 text-blue-800' 
                                            : 'bg-green-100 text-green-800'
                                    }`}>
                                        {product.brand === 'kia' ? 'کیا' : 'هیوندای'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                    {formatPrice(product.price)}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => onToggleBestSeller(product.id)}
                                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                            product.isBestSeller 
                                                ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {product.isBestSeller ? 'محبوب' : 'عادی'}
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                        >
                                            ویرایش
                                        </button>
                                        <button
                                            onClick={() => onDelete(product.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                        >
                                            حذف
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredAndSortedProducts.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    محصولی یافت نشد
                </div>
            )}
        </div>
    );
} 