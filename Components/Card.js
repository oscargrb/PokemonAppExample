import { Link } from "expo-router";
import { styled } from "nativewind";
import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const StyledPressable = styled(Pressable);

export default function Card({ item, index }) {
  return (
    <View className="flex items-center">
      <Link href={`/${item.id}`} asChild>
        <StyledPressable className="active:opacity-80">
          <View className="bg-slate-300 rounded-lg m-2 p-3 flex-col items-center justify-center w-1/2">
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`,
              }}
              style={styles.image}
            />
            <Text className="text-center">
              {item.id}. {item.name}
            </Text>
          </View>
        </StyledPressable>
      </Link>
    </View>
  );
}

export function AnimatedCard({ item, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity: opacity }}>
      <Card item={item} index={index} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
});
