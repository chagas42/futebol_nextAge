import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  header: {
    height: 270,
    width: '100%',
    marginTop: getStatusBarHeight() + 10,
    paddingHorizontal: 20,
  },
  iconArea: {
    width: '100%',
    paddingTop: 22,
  },
  headerContent: {
    alignItems:'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  playersNumber: {
    fontFamily: theme.fonts.semibold,
    fontSize: 96,
    color: '#fff',
    marginBottom: 25,
  },
  description: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: '#fff',
  },
  dash: {
    fontSize:55, 
    color:'#fff', 
    paddingHorizontal: 10
  },
  max: {
    fontSize: 43,
    fontFamily: theme.fonts.bold,
    color: '#fff'
  }
});