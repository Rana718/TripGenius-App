import { View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./Custombutton";

const Login = () => {
    return (
        <View className="flex-1 bg-gray-900">
            
            <Image
                source={require('@/assets/images/start_img.png')}
                className="w-full h-3/5"
                resizeMode="cover"
                style={{
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    overflow: 'hidden',
                }}
            />

            
            <View className="flex-1 h-full rounded-t-3xl -top-14 bg-gray-800 px-8 py-10">
                {/* App Title */}
                <Text className="text-white font-bold text-center text-4xl mt-4">
                    TripGenius
                </Text>

                
                <Text className="text-gray-300 text-center mt-6 text-base leading-6">
                    Effortlessly plan your next adventure with personalized itineraries, smart recommendations, and real-time updates for stress-free, unforgettable travel experiences.
                </Text>

                
                <View className="flex-1 mt-4">
                    <CustomButton containerStyle="px-28 py-4" onPress={()=>console.log("press")} title='Get Started'/>
                </View>
            </View>
        </View>
    );
};

export default Login;
