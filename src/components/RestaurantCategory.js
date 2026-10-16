import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="bg-gray-100 mt-5 w-6/12 mx-auto shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer bg-gray-200"
        onClick={handleClick}
      >
        <h1 className="p-2 font-bold">
          {category.title} ({category?.itemCards.length})
        </h1>
        <span className="mr-5">⬇️</span>
      </div>

      {showItems &&
        category?.itemCards?.map((item) => (
          <ItemList key={item?.card?.info?.id} items={item?.card?.info} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
