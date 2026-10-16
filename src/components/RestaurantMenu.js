import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-2">{name}</h1>
      <p className="font-bold text-sm">{cuisines.join(",")}</p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          category={category?.card?.card}
          showItems={showItems === index}
          setShowItems={() =>
            setShowItems((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
