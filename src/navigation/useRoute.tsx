import {useRoute as useNativeRoute} from '@react-navigation/native';
import {RootRouteProps, Screens} from './screens-types';

/**
 *
 * @returns useRoute hook
 * we should pass screen type as useRoute<'AUTH'>
 */
export const useRoute = <T extends Screens>() => {
  return useNativeRoute<RootRouteProps<T>>();
};
