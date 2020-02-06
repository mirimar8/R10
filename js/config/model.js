import AsyncStorage from '@react-native-community/async-storage';
// import { Component } from 'react';


const addFave = async (faveId) => {
    try {
        let existingIds = JSON.parse(await AsyncStorage.getItem("faveIds")) || [];
        if (existingIds.indexOf(faveId) === -1) {
            existingIds.push(faveId);
        }
        await AsyncStorage.setItem("faveIds", JSON.stringify(existingIds));
    } catch (error) {
        throw (error)
    }
}

const getFaves = async () => {
    try {
        let faveIds = await AsyncStorage.getItem("faveIds");
        // console.log("get faves", JSON.parse(faveIds));
        return JSON.parse(faveIds);
    } catch (error) {
        throw (error)
    }
}

const removeFave = async (faveId) => {
    try {
        let existingIds = JSON.parse(await AsyncStorage.getItem("faveIds")) || [];
        let newIds = existingIds.filter((id) => {
            id !== faveId
        })
        await AsyncStorage.setItem("faveIds", JSON.stringify(newIds));
    } catch (error) {
        throw (error)
    }
}

export { addFave, getFaves, removeFave };
