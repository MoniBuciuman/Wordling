import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screens} from './screens-types';

/**
 *
 * @returns useNavigation hook with Apps ParamList type
 */
export const useNavigation = () => {
  return useNativeNavigation<
    NativeStackNavigationProp<Record<Screens, undefined>>
  >();
};
