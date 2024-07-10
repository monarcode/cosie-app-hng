import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import '../unistyles';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
  tabs: {
    initialRouteName: '(home)',
  },
};

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Sora-Light': require('../assets/fonts/SofiaProLight.ttf'),
    'Sora-Regular': require('../assets/fonts/SofiaProRegular.ttf'),
    'Sora-Bold': require('../assets/fonts/SofiaProBold.ttf'),
    'Sora-SemiBold': require('../assets/fonts/SofiaProSemiBold.ttf'),
    'Sora-Medium': require('../assets/fonts/SofiaProMedium.ttf'),
    'Dirty-Line': require('../assets/fonts/DirtyLine.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </QueryClientProvider>
  );
}
