import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";


const Login = () => {
    return (
        <View className="flex-1">
            <Image source={require('@/assets/images/start_img.png')} className="w-full h-3/5" resizeMode="cover" />
            <View className="flex-1 h-full rounded-t-3xl -top-14 bg-gray-900">

                <Text className="text-white font-bold text-center text-4xl mt-10">
                    TripGenius
                </Text>

                <Text className="text-white text-center mt-8 mx-10 text-sm">
                    Effortlessly plan your next adventure with personalized itineraries, smart recommendations, and real-time updates for stress-free, unforgettable travel experiences.
                </Text>

                <TouchableOpacity className="bg-red-400 rounded-3xl mx-10 mt-10">
                    <Text className="text-gray-900 font-bold text-center text-2xl p-4">
                        Sign with Google
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Login;