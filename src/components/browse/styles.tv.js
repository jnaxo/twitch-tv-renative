import { StyleSheet, getScaledValue } from 'renative';
import { STYLES } from '../../config';

export const blockStyles = StyleSheet.create({
  container: {
    padding: getScaledValue(5),
    backgroundColor: 'blackorange'
  },
  thumbnail: {
    width: getScaledValue(200),
    height: getScaledValue(125),
  },
  title: {
    fontSize: getScaledValue(10),
    color: STYLES.COLOR.WHITE,
  }
});
