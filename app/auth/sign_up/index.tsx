import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from "@/components/Custombutton";

const Sing_up = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View className="flex-1 px-6 pt-14 bg-white">
            <TouchableOpacity onPress={() => router.back()}>

                <AntDesign name="arrowleft" size={32} color="black" />
            </TouchableOpacity>
            <Text className="text-left text-4xl font-bold text-blue-600 pt-3">
                Create New Account
            </Text>

            <View className="mt-10">

                <Text className="text-gray-700 text-lg mb-2">FullName</Text>
                <TextInput
                    placeholder="Enter your email"
                    value={name}
                    onChangeText={setName}
                    className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 bg-gray-100"
                />

                <Text className="text-gray-700 text-lg mb-2 mt-6">Email</Text>
                <TextInput
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 bg-gray-100"
                />


                <Text className="text-gray-700 text-lg mt-6 mb-2">Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 bg-gray-100"
                />
            </View>

            <View className="mt-12">
                <CustomButton
                    title="Sign Up"
                    onPress={() => console.log("purs")}
                    textStyle="text-white text-center text-lg font-semibold"
                    containerStyle="bg-blue-600 rounded-full py-4"
                />
            </View>
            <View className="mt-5">
                <CustomButton
                    title="Sign In"
                    onPress={() => router.back()}
                    textStyle="text-black text-center text-lg font-semibold"
                    containerStyle="rounded-full border border-black py-4"
                />
            </View>

        </View>
    );
};

export default Sing_up;