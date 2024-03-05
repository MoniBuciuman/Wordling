import {RouteProp} from '@react-navigation/native';
import {SCREENS} from './screens';

type HomeType = (typeof SCREENS.HOME)[keyof typeof SCREENS.HOME];

/**
 * All Screens
 */
export type Screens = HomeType;

type ScreensWithParams = typeof SCREENS.HOME.TYPE_WORD;

type ScreensType = Exclude<Screens, ScreensWithParams>;

export type ParamList = Record<ScreensType, undefined> &
  Record<typeof SCREENS.HOME.TYPE_WORD, {homeworkTitle: string}>;

export type RootRouteProps<RouteName extends keyof ParamList> = RouteProp<
  ParamList,
  RouteName
>;
