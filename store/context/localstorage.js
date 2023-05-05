import AsyncStorage from "@react-native-async-storage/async-storage";

async function _storeData(key, value) {
  try {
    const dataArray = await _retrieveData(key);
    dataArray.push(value);
    await AsyncStorage.setItem(key, JSON.stringify(dataArray));
  } catch (error) {
    console.log(error);
  }
}

async function _retrieveData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return JSON.parse(jsonValue);
  } catch (error) {
    console.log(error);
  }
}

export { _storeData, _retrieveData };
