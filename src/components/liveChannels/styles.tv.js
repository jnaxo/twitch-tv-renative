import { StyleSheet, getScaledValue } from 'renative';
import { STYLES } from '../../config';

export const mainStyles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  title: {
    fontSize: getScaledValue(15),
    color: STYLES.COLOR.WHITE,
  },
  list: {
    width: '90%',
    height: '100%'
  }
});
