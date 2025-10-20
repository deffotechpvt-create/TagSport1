import { Stack } from "expo-router";

export default function TrainingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="training" />
      <Stack.Screen name="exercise" />
    </Stack>
  );
}
