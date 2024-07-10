import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

import { Text, View } from '~/components/shared';

const Favorites = () => {
  const { theme } = useStyles();

  return (
    <SafeAreaView edges={['top']} style={theme.components.safeArea}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text>favorites</Text>
      </View>
    </SafeAreaView>
  );
};
export default Favorites;
