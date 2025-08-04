export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-center text-sm text-gray-700 py-4">
            <p>
                © {new Date().getFullYear()} <span className="font-semibold text-red-600">فروشگاه قطعات هیوندا و کیا</span>. تمامی حقوق محفوظ است.
            </p>
        </footer>
    );
}