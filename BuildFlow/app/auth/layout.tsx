// Dentro do app/_layout.tsx (Simplificado)
import { Stack } from 'expo-router';

export default function RootLayout() {
  const isAuthenticated = false; // Substitua pela sua lógica real de login

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="(auth)/login" />
      )}
    </Stack>
  );
}