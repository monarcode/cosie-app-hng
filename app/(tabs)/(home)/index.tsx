import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import { View } from '~/components/shared';
import Catalog from '~/modules/home/components/catalog';
import Slider from '~/modules/home/components/slider';

export default function Home() {
  const { theme } = useStyles();

  return (
    <SafeAreaView
      edges={['top']}
      style={[theme.components.safeArea, { rowGap: theme.margins['4xl'] }]}>
      <View style={{ height: 180, marginTop: theme.margins.lg }}>
        <Slider />
      </View>

      <Catalog />
    </SafeAreaView>
  );
}
