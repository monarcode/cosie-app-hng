import { Pressable, PressableProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Text } from './text';

export const Button = ({
  style,
  children,
  type = 'primary',
  containerStyle,
  ...others
}: ButtonProps) => {
  const { styles } = useStyles(_styles, {
    type,
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        typeof containerStyle === 'function' ? containerStyle({ pressed }) : containerStyle,
      ]}
      {...others}>
      <Text>{children}</Text>
    </Pressable>
  );
};

const _styles = createStyleSheet((theme) => ({
  container: {
    height: 50,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.margins['3xl'],
    variants: {
      type: {
        primary: {
          backgroundColor: theme.colors.brand,
        },
        secondary: {
          backgroundColor: theme.colors.white,
        },
      },
    },
  },
}));

type Buttontype = 'primary' | 'secondary';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  type?: Buttontype;
  containerStyle?: PressableProps['style'];
}
