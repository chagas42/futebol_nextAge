import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: '#fff'
  },
  sliderArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  value: {
    fontSize: 13,
    fontFamily: theme.fonts.bold,
    color: '#fff'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#E95958',
    height: 35,
    width: 275,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    borderRadius: 10
  },
  titleButton: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.bold,
    color:'#fff'
  }
});