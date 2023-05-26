import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageData } from '../types/AsyncStorageData.type';

export const ifNewsExistInStorage = async (data:any) =>{
  let currentData:any = await getData('news');
  const xx: Object = currentData.find(element => element.url == data.url);
  if (xx != null || undefined) {
    return true;
  }
  else{
    return false;
  }
}

export const addNews = async (data:any) =>{
    let currentData:any = await getData('news');

    if (currentData == null) {
      var arr:any[]=[data];
      storeData('news', arr)
      return false;
    }

    const elementFromArray: Object = currentData.find(element => element.url == data.url);
    if (elementFromArray == null || undefined) {
      currentData.push(data)
      storeData('news', currentData)
    }
    console.log(await getData('news'))
}

export const removeNews = async (data:any) =>{
  let currentData:any = await getData('news');
  const elementFromArray: Object = currentData.find(element => element.url == data.url);
  if (elementFromArray != null || undefined) {
    const index = currentData.indexOf(elementFromArray);
    if (index > -1) {
      currentData.splice(index, 1);
      storeData('news', currentData)
    }
  }
  console.log(await getData('news'))
}

const storeData = async (type:AsyncStorageData, value:Array<any>) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(type, jsonValue)
    } catch (e) {
      // saving error
    }
  }

export const getData = async (type:AsyncStorageData) => {
    try {
      const jsonValue = await AsyncStorage.getItem(type)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }