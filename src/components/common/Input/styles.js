import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
  // textInput:{
  //     height: 40,
  //     borderColor: 'gray',
  //     borderWidth: 1
  // }
});
