import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 63,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:5,
    backgroundColor: '#fff',
    paddingHorizontal: 11,
    
  },
  name: {
    flex: 1,
    fontSize: 13, 
    fontFamily: theme.fonts.bold,
    marginLeft: 18,
    color: '#E95958'
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  }, 
  elevation: {
    elevation: 5,
  }
});