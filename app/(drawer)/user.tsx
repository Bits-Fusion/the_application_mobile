import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function UserScreeen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => router.back()}>Go back home</Button>
    </View>
  );
}
