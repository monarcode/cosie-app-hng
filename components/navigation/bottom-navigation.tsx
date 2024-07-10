import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Dimensions, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import TabIcon from './tab-icon';

import Light from '~/assets/indicator-light.svg';
import { View } from '~/components/shared';

const CustomBottomNavigation = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const containerWidth = Dimensions.get('window').width;
  const TAB_COUNT = state.routes.length;
  const TAB_WIDTH = containerWidth / TAB_COUNT;
  const INDICATOR_WIDTH = TAB_WIDTH / 2;
  const { bottom } = useSafeAreaInsets();

  const { styles } = useStyles(style);

  const translateAnimation = useAnimatedStyle(() => {
    const centerOffset = (TAB_WIDTH - INDICATOR_WIDTH) / 2;
    return {
      transform: [
        {
          translateX: withSpring(state.index * TAB_WIDTH + centerOffset, {
            stiffness: 500,
            damping: 30,
          }),
        },
      ],
    };
  });

  return (
    <View
      style={[
        styles.container,
        {
          bottom,
        },
      ]}>
      <View style={styles.inner}>
        <Animated.View
          style={[
            translateAnimation,
            {
              width: INDICATOR_WIDTH,
            },
            styles.indicatorBone,
          ]}
        />
        <Animated.View
          style={[
            translateAnimation,
            {
              width: INDICATOR_WIDTH,
            },
            styles.indicatorLight,
          ]}>
          <Light />
        </Animated.View>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, { merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}>
              <View style={{ width: TAB_WIDTH }}>
                <TabIcon route={route.name} isFocused={isFocused} />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const style = createStyleSheet((theme) => ({
  container: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7eaf126',
  },
  inner: {
    marginHorizontal: 'auto',
    height: 70,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicatorBone: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    height: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomStartRadius: 999,
    borderBottomEndRadius: 999,
    backgroundColor: theme.colors.brand,
  },
  indicatorLight: {
    position: 'absolute',
    top: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tab: {
    position: 'relative',
    flex: 1,
  },
  tabInner: {
    zIndex: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
}));

export default CustomBottomNavigation;
