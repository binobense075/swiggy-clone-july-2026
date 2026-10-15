import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
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
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-2">{name}</h1>
      <p className="font-bold text-sm">{cuisines.join(",")}</p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          category={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
