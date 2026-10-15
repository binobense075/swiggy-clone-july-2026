import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="flex  w-full mt-2 p-2 border-b border-gray-300">
      <div className="w-9/12 text-left p-6">
        <div className="font-bold">
          {items.name} ₹{items.price / 100}
        </div>
        <p className="text-sm">{items.description}</p>
      </div>
      <div className="w-3/12 flex justify-center items-center">
        <div className="relative">
          <img src={CDN_URL + items.imageId} className="w-28" />
          <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white font-bold px-3 py-1 rounded-lg cursor-pointer">
            Add+
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
