import { createContext, useState, useEffect } from "react";
import { _storeData, _retrieveData } from "./localstorage";

export const FavContext = createContext({
  ids: [],
  addFouvrite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavProvider({ children }) {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    initIds();
  }, []);

  async function initIds() {
    let data = await _retrieveData("ids");
    if (!data) {
      setIds([]);
    } else {
      setIds(data);
    }
    console.log(JSON.stringify(data));
  }

  async function addFavrite(id) {
    setIds([...ids, id]);
    await _storeData("ids", id);
  }

  removeFavrite = (id) => {
    setIds(ids.filter((id) => id !== id));
  };

  return (
    <FavContext.Provider
      value={{
        ids: ids,
        addFouvrite: addFavrite,
        removeFavourite: removeFavrite,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
