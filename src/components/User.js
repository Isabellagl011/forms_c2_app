import React from "react";
import { Text } from "react-native";

export const User = ({ item }) => {
  const { userName } = item;
  console.log(item);
  return <Text>{userName}</Text>;
};
