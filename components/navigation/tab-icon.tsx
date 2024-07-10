import { View } from '../shared';

import FavoritesActive from '~/assets/icons/active/Favorites.svg';
import HomeActive from '~/assets/icons/active/Home.svg';
import TrolleyActive from '~/assets/icons/active/Trolley.svg';
import FavoritesInactive from '~/assets/icons/inactive/Favorites.svg';
import HomeInactive from '~/assets/icons/inactive/Home.svg';
import TrolleyInactive from '~/assets/icons/inactive/Trolley.svg';

const TabIcon = ({ route, isFocused }: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    const height: number = 24;
    const width: number = 24;

    switch (route) {
      case '(home)':
        return isFocused ? (
          <HomeActive width={width} height={height} />
        ) : (
          <HomeInactive style={{ opacity: 0.5 }} width={width} height={height} />
        );
      case 'trolley':
        return isFocused ? (
          <TrolleyActive width={width} height={height} />
        ) : (
          <TrolleyInactive style={{ opacity: 0.5 }} width={width} height={height} />
        );
      case 'favorites':
        return isFocused ? (
          <FavoritesActive width={width} height={height} />
        ) : (
          <FavoritesInactive style={{ opacity: 0.5 }} width={width} height={height} />
        );
      default:
        break;
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}>
      {renderIcon(route, isFocused)}
    </View>
  );
};
export default TabIcon;

interface Props {
  route: string;
  isFocused: boolean;
}
