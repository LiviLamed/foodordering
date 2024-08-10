import { Stack } from 'expo-router';

export default function MenuStack() {
  return (
    <Stack>
      {/* one way of setting title header */}
      <Stack.Screen name="index" options={{ title: 'Menu' }} />
    </Stack>
  );
}
