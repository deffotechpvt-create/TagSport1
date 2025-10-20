import { Stack } from "expo-router";

export default function HealthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="health" />
      <Stack.Screen name="fitnessTracker" />
      <Stack.Screen name="hydrate" />
      <Stack.Screen name="heartRate" />
      <Stack.Screen name="Sleep/start" />
      <Stack.Screen name="Diet/diet" />
    </Stack>
  );
}
