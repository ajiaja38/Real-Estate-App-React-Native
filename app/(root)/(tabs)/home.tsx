import { Link, useNavigation, useRouter } from "expo-router";
import { useCallback } from "react";
import { Alert, BackHandler, Button, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-blue-500 my-10 font-rubik text-3xl">
        Welcome to restate
      </Text>
      <Link
        href={{
          pathname: "/properties/[id]",
          params: { id: 1 },
        }}
      >
        Propertis
      </Link>
      <Button
        title="Logout"
        onPress={() => {
          Alert.alert("Logout", "Are you sure you want to logout?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "YES",
              onPress: () => {
                router.push("/");
              },
            },
          ]);
        }}
      />
    </View>
  );
}
