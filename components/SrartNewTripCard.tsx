import { View, Text } from "react-native";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';


export default function SrartNewTripCard() {
    return(
        <View className="flex-1 p-20 m-50 items-center gap-2">
            <Entypo name="location-pin" size={40} color="black" />
            <Text className="text-2xl font-bold">No trips planned yet</Text>

            <Text className="text-base text-gray-500">
                Looks like its time to plan a new travel experinece! Get Started Below
            </Text>
        </View>
    )
}