export default function Tabs() {
    return (
        <div className="flex border-b border-gray-200 mt-4">
            <div className="flex-1 text-center py-3 text-[#7D817D] font-medium cursor-pointer text-sm">
                Coupons
            </div>
            <div className="flex-1 text-center py-3 text-[#4B4E4B] font-bold border-b-2 border-[#4B4E4B] cursor-pointer text-sm">
                Giftcards
            </div>
            <div className="flex-1 text-center py-3 text-[#7D817D] font-medium cursor-pointer text-sm">
                Payment offers
            </div>
        </div>
    );
}
