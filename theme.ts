const colors = {
  white: '#ffffff',
  azureRadiance: '#007AFF',
  limedSpruce: '#38434D',
  cornflowerBlue: '#6366F1',
  astral: '#2E78B7',
  background: 'rgba(47, 47, 47, 1.0)',
  light: '#e7eaf1',
  brand: 'rgba(251, 97, 7,1.0)',
  dark: 'rgba(252, 250, 248, 0.03)',
  slideBg: 'rgba(26, 26, 26, 0.376)',
} as const;

const fontFamily = {
  sliderTitle: 'Dirty-Line',
  'Sora-Regular': 'Sora-Regular',
} as const;

const fontSizes = {
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
} as const;

export const lightTheme = {
  colors,
  fontFamily,
  fontSizes,
  components: {
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 24,
    },
    separator: {
      height: 1,
      marginVertical: 30,
      width: '80%',
      backgroundColor: 'grey',
    },
    button: {
      alignItems: 'center',
      backgroundColor: colors.cornflowerBlue,
      borderRadius: 24,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 16,
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      color: colors.limedSpruce,
      fontSize: 36,
    },
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
  },
  margins: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    '3xl': 24,
    '4xl': 32,
  },
} as const;
