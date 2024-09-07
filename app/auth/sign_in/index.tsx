import { View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/Custombutton";
import AntDesign from '@expo/vector-icons/AntDesign';

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View className="flex-1 px-8 pt-14 bg-white">
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={32} color="black" />
            </TouchableOpacity>

            <Text className="text-left text-4xl pt-2 font-bold text-blue-600">
                Let's Sign You In
            </Text>

            {/* Subtitles */}
            <Text className="text-left pt-2 text-2xl font-sans text-gray-600">
                Welcome Back
            </Text>
            <Text className="text-left text-2xl font-sans text-gray-600">
                You've been missed!
            </Text>

            {/* Input Fields */}
            <View className="mt-10">
                {/* Email Input */}
                <Text className="text-gray-700 text-lg mb-2">Email</Text>
                <TextInput
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 bg-gray-100"
                />

                {/* Password Input */}
                <Text className="text-gray-700 text-lg mt-6 mb-2">Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="border border-gray-300 rounded-lg px-4 py-3 text-base text-gray-700 bg-gray-100"
                />
            </View>

            {/* Forgot Password */}
            <TouchableOpacity onPress={() => console.log("purs")}>
                <Text className="text-right mt-4 text-blue-600 font-semibold">
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <View className="mt-10">
                <CustomButton
                    title="Sign In"
                    onPress={() => console.log("purs")}
                    textStyle="text-white text-center text-lg font-semibold"
                    containerStyle="bg-blue-600 rounded-full py-4"
                />
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center mt-8">
                <Text className="text-gray-600 text-base">Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/auth/sign_up')}>
                    <Text className="text-blue-600 text-base font-semibold">Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Status Bar */}
            <StatusBar barStyle="dark-content" />
        </View>
    );
};

export default SignIn;
