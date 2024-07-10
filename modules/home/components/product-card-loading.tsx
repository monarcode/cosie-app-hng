import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { View } from '~/components/shared';

const colors = ['#353535', '#444'];

const ProductCardLoading = () => {
  const { styles } = useStyles(_styles);

  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      style={styles.container}
      animate={{ backgroundColor: 'transparent' }}>
      <View
        style={{
          overflow: 'hidden',
          borderRadius: 20,
          backgroundColor: 'transparent',
        }}>
        <Skeleton colorMode="dark" colors={colors} radius="square" height={182} width="100%" />
      </View>

      <View style={styles.bodyContainer}>
        <Skeleton colorMode="dark" radius="round" colors={colors} height={20} width={80} />
        <Skeleton colorMode="dark" radius="round" colors={colors} height={20} width={130} />
      </View>
    </MotiView>
  );
};

const _styles = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    maxWidth: '47%',
    rowGap: theme.margins.md,
  },
  imageWrapper: {
    backgroundColor: theme.colors.dark,
    width: '100%',
    height: 182,
    borderRadius: 24,
  },
  title: {
    color: 'white',
    fontSize: theme.fontSizes.md,
    fontFamily: 'Sora-Medium',
  },
  price: {
    color: '#fcfaf8',
    fontSize: theme.fontSizes.sm,
    fontFamily: 'Sora-Light',
  },
  bodyContainer: {
    rowGap: theme.margins.sm,
  },
}));

export default ProductCardLoading;
