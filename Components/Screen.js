import { View } from "react-native";

export default function Screen({ children }) {
  return <View className="bg-slate-800 flex-1 p-3">{children}</View>;
}
