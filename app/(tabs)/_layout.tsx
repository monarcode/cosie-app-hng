import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import CustomBottomNavigation from '~/components/navigation/bottom-navigation';

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomNavigation {...props} />;
};

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
          headerShown: false,
        }}
        tabBar={CustomBottomTabs}>
        <Tabs.Screen name="(home)" />
        <Tabs.Screen name="favorites" />
        <Tabs.Screen name="trolley" />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
}
