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
  bigAddbtnBG: {
    flex:3,
    backgroundColor:config.lightGrey,
    justifyContent:"center", 
    alignItems: 'center',
  },
  bigAddbtn: {
    fontSize: 50,
    padding: btnPadding,
    paddingLeft: btnPadding + 20,
    paddingRight: btnPadding + 20,
  },
  recentWorkoutContainer: {
    flex:7,
  },
  progresstxt: {
    margin:10,
    padding:10,
    fontWeight:"bold", 
    fontSize:20,
    color: config.txtgrey,
  },
});
