import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/Custombutton";
import AntDesign from '@expo/vector-icons/AntDesign';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/FirebaseConfig";

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

    const handleSignIn = () => {
        if (!email && !password) {
            ToastAndroid.show('Please enter all fields', ToastAndroid.BOTTOM);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                ToastAndroid.show('Sign Up Successful!', ToastAndroid.BOTTOM);
                router.replace('/mytrip');

            })
            .catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
            });

    }

    return (
        <View className="flex-1 px-8 pt-14 bg-white">
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={32} color="black" />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-left text-4xl pt-2 font-bold text-blue-600">
                    Let's Sign You In
                </Text>


                <Text className="text-left pt-2 text-2xl text-gray-600">
                    Welcome Back
                </Text>
                <Text className="text-left text-2xl text-gray-600">
                    You've been missed!
                </Text>


                <View className="mt-10">

                    <Text className="text-gray-700 text-lg mb-2">Email</Text>
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


                <TouchableOpacity onPress={() => console.log("purs")}>
                    <Text className="text-right mt-4 text-blue-600 font-semibold">
                        Forgot Password?
                    </Text>
                </TouchableOpacity>


                <View className="mt-10">
                    <CustomButton
                        title="Sign In"
                        onPress={handleSignIn}
                        textStyle="text-white text-center text-lg font-semibold"
                        containerStyle="bg-blue-600 rounded-full py-4"
                    />
                </View>


                <View className="flex-row justify-center mt-8">
                    <Text className="text-gray-600 text-base">Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/auth/sign_up')}>
                        <Text className="text-blue-600 text-base font-semibold">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


            <StatusBar barStyle="dark-content" />
        </View>
    );
};

export default SignIn;
