import { Text, View } from 'components/shared';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

const Trolley = () => {
  const { theme } = useStyles();

  return (
    <SafeAreaView edges={['top']} style={theme.components.safeArea}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text>Trolley</Text>
      </View>
    </SafeAreaView>
  );
};
export default Trolley;
