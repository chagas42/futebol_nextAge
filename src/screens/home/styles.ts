import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0F3D46'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
  },
  listTitleArea: {
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 30,
  },
  listTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: '#0f3d46'
  }
 
});