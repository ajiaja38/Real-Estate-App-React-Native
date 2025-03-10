import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";

const Index: React.FC = () => {
  const router = useRouter();

  const handleLogin = async () => {
    router.push("/home");
    Alert.alert("Success", "You have successfully logged in.");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome To ReState
          </Text>
          <Text className="text-center text-3xl font-rubik-bold mt-2">
            Let's Get You Closer to {"\n"}{" "}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg mt-12 text-center font-rubik text-black-200">
            Login To Restate With Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow shadow-zinc-300 border border-zinc-100 rounded-full py-4 mt-5 w-full"
          >
            <View className="flex flex-row items-center justify-center gap-3">
              <Image
                source={icons.google}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
