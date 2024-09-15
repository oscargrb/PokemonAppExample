import { Link, Slot, Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import logo from "../assets/pokelogo.png";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f59e0b" },
        headerTitle: "",
        headerLeft: () => (
          <Image source={logo} style={{ width: 100, height: 50 }} />
        ),
        headerRight: () => (
          <Link
            href={"/about"}
            className="text-center text-gray-900 underline text-lg"
          >
            About
          </Link>
        ),
      }}
    />
  );
}
