// src/lib/utils.ts
export function formatPrice(price: number): string {
    return price.toLocaleString('fa-IR') + ' تومان';
}
