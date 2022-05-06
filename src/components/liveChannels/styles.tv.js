import { StyleSheet, getScaledValue } from 'renative';
import { STYLES } from '../../config';

export const mainStyles = StyleSheet.create({
  title: {
    fontSize: getScaledValue(15),
    color: STYLES.COLOR.WHITE,
  }
});
