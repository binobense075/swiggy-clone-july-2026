import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="w-56 p-2.5 m-2.5 bg-gray-100  hover:bg-gray-200 hover:cursor-pointer">
      <img
        className="w-full h-52 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
