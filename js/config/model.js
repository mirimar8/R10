import AsyncStorage from '@react-native-community/async-storage';
// import { Component } from 'react';


addFave = async (faveIds) => {
    try {
        await AsyncStorage.setItem(faveIds, JSON.stringify(faveIds));
    } catch (error) {
        throw (error)
    }
}

getFave = async () => {
    try {
        let faveIds = await AsyncStorage.getItem(faveIds);
        // console.log(JSON.parse(faveIds));
        return JSON.parse(faveIds);
    } catch (error) {
        throw (error)
    }
}

removeFave = async () => {
    try {
        await AsyncStorage.removeItem(faveIds);
    } catch (error) {
        throw (error)
    }
}

queringAllFaves = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
        return values;
    } catch (error) {
        throw (error)
    }
}



export default {
    addFave,
    getFave,
    removeFave,
    queringAllFaves
}

/**
 * 1. Get the list of all Session ids from API [1,2,3,4,5...] -- React Component
 * 2. Select session you like and push it to an array         -- React Component
 * 3. Save that array to AsyncStorage, through model          -- model
 *
 * key: ids / favIds / favs
 * - Add/Save/SetItem = key, value => AsyncStorage.setItem(key, value)
 * - Get/Queries/ = key = AsyncStorage.getItem(key)
 * - Remove
 */