import React from "react";
import { View, Text, ScrollView } from "react-native";
import AppGradient from "../../../components/AppGradient";
import GuidedAffirmationsGallery from "../../../components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "../../../constants/affirmation-gallery";

const Affirmations = () => {
  return (
    <View className="flex-1 ">
      <AppGradient colors={["#00286b", "#366f6a", "#417974"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your mindset with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
