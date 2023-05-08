import { createContext, useState, useEffect } from "react";
import {
  _storeData,
  _retrieveData,
  _deleteData,
  _deleteAllData,
} from "./localstorage";

export const FavContext = createContext({
  ids: [],
  addFouvrite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavProvider({ children }) {
  const [ids, setIds] = useState([]);

  console.log(ids);
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
  }

  async function addFavrite(id) {
    setIds([...ids, id]);
    await _storeData("ids", id);
  }

  async function removeFavrite(id) {
    const newData = await _deleteData("ids", id);
    setIds(newData);
  }

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
