import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [hasError, setHasError] = useState(false);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      console.log(data);
      const json = await data.json();
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to Fetch Restaurants", error);
      setHasError(true);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Ooops seems like you are in offline....Please connect to a network and
        try again
      </h1>
    );

  if (hasError)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Something went wrong please, try again
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-5">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="flex">
          <div>
            <input
              type="text"
              className="p-2.5 w-64 outline-none border border-[rgb(240,217,174)] focus:border-[#ffa500]"
              placeholder="Search Restaurants"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                if (e.target.value === "") {
                  setFilteredRestaurants(listOfRestaurants);
                }
              }}
            />
            <button
              className="p-2.5 border border-orange-300 bg-orange-300 text-white cursor-pointer font-bold"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <div className="ml-10">
            <label>UserName: </label>
            <input
              className="p-2.5 w-64 border border-[rgb(240,217,174)] outline-none focus:border-[#ffa500]"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="filter">
          <button
            className="p-2.5 bg-teal-200 border-none rounded-lg text-white font-bold"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4,
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {filteredRestaurants?.length === 0 && listOfRestaurants?.length !== 0 && (
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          No restaurants found.
        </h1>
      )}
      <div className="my-5 flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
