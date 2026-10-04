import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "http://localhost:5000/api/menu?restaurantId=" + resId,
    );
    const json = await data?.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
