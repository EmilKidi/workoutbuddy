import { StyleSheet } from 'react-native';
import config from './config';

var btnPadding = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flex: 1,
  },
  SquareButton: {
    fontSize: 50,
    padding: btnPadding,
    backgroundColor: config.mainColor,
    borderBottomColor: config.mainColorDark,
    paddingLeft: btnPadding + 20,
    paddingRight: btnPadding + 20,
  },
  SquareButtonTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  }
});
