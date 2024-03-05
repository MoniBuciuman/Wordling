import {atom} from 'recoil';
import {persistAtom} from './recoilUtils';

export type Answer = {
  key: string;
  answer?: string;
  isCorrect: boolean;
  timestamp: number;
};

export const answerAtom = atom({
  key: 'answerAtom', // unique ID (with respect to other atoms/selectors)
  default: [] as Answer[], // default value (aka initial value)
  effects: [persistAtom('answerAtom')],
});
