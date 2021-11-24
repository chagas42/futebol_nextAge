import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  emptyList: {
    marginTop: '40%',
    alignSelf:'center',
    justifyContent: 'center'
  },
  emptyListDescription: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: '#0F3D46',
    textAlign: 'center'
  },
});