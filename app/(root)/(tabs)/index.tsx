import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
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
      <Link href="/sign-in">Sign in</Link>
      <Link
        href={{
          pathname: "/properties/[id]",
          params: { id: 1 },
        }}
      >
        Properti
      </Link>
    </View>
  );
}
