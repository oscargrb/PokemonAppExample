import { StatusBar } from "expo-status-bar";

import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import Main from "./Components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="bg-slate-800" style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
