import GLOBAL_CONFIG from '../../platformAssets/renative.runtime.json';

export { default as STYLES } from './styles';
export const CONFIG = GLOBAL_CONFIG;

export default {
  appEnv: process.env.NODE_ENV
};
