import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={` bg-slate-400/50 rounded-full min-h-[45px] justify-center items-center  ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`text-lg text-gray-300 ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
