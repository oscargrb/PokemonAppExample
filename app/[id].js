import { Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Screen from "../Components/Screen";

export default function Details() {
  const [pokeInfo, setPokeInfo] = useState(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    findInfo();
  }, [id]);

  const findInfo = async () => {
    const pokeInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      headers: "GET",
    });
    const results = await pokeInfo.json();

    setPokeInfo(results);
  };

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerStyle: { backgroundColor: "#f59e0b" },
          headerTintColor: "#333",
          headerTitle: `Pokemon Details`,
        }}
      />
      {pokeInfo == null ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <View>
          <ScrollView>
            <View className="flex-col justify-center items-center mb-3">
              <View className="bg-white rounded-full p-5 justify-center items-center">
                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInfo.id}.png`,
                  }}
                  width={150}
                  height={150}
                />
              </View>
            </View>
            <Text
              className={textStyle + " font-bold text-emerald-400 text-2xl"}
            >
              {pokeInfo.name}
            </Text>
            <Text className={textStyle + " font-bold text-amber-500"}>
              Abilities:{" "}
            </Text>
            {pokeInfo.abilities.map((item) => (
              <Text key={item.ability.name} className={textStyle}>
                {item.ability.name}
              </Text>
            ))}
            <Text className={textStyle + " font-bold text-amber-500"}>
              Types:{" "}
            </Text>
            {pokeInfo.types.map((item) => (
              <Text key={item.type.name} className={textStyle}>
                {item.type.name}
              </Text>
            ))}
            <Text className={textStyle + " font-bold text-amber-500"}>
              Moves:{" "}
            </Text>
            {pokeInfo.moves.map((item) => (
              <Text key={item.move.name} className={textStyle}>
                {item.move.name}
              </Text>
            ))}
          </ScrollView>
        </View>
      )}
    </Screen>
  );
}

const textStyle = "text-white text-lg text-center";
