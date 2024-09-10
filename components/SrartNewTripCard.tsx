import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';

export default function StartNewTripCard() {
    return (
        <View className="flex-1 justify-center items-center p-10 bg-white rounded-lg shadow-md m-5">
            <Entypo name="location-pin" size={50} color="red" />
            <Text className="text-2xl font-bold text-center mt-4">
                No trips planned yet
            </Text>
            <Text className="text-base text-gray-500 text-center mt-2 px-5">
                Looks like it's time to plan a new travel experience! Get started below.
            </Text>
            <TouchableOpacity className="p-3 bg-red-500 rounded-xl mt-7">
                <Text className="text-white text-lg">
                    Start a new trip
                </Text>
            </TouchableOpacity>
        </View>
    );
}
