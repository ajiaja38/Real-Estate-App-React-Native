import { View, Text, Alert } from "react-native";
import React from "react";
import { Slot, useRouter } from "expo-router";

const ScreenGuard = () => {
  const isLogin: boolean = false;

  const router = useRouter();

  if (!isLogin) {
    router.replace("/");
    Alert.alert("Error", "You are not logged in.");
  }

  return <Slot />;
};

export default ScreenGuard;
