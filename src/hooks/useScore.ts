import {useCallback, useRef} from 'react';
import {useSetRecoilState} from 'recoil';
import {answerAtom} from '../state/answerAtom';

export type ResponseType = {
  value: string;
  answer?: string;
  status?: 'correct' | 'wrong';
};

export const useScore = () => {
  const responses = useRef<ResponseType[]>([]);
  const saveAnswer = useSetRecoilState(answerAtom);

  const saveResponse = useCallback(
    (response: ResponseType) => {
      responses.current.push(response);
      console.log('🚀 saveResponse:', JSON.stringify(response, null, 2));

      saveAnswer(answers => [
        ...answers,
        {
          key: response.value,
          answer: response.answer,
          isCorrect: response.status === 'correct',
          timestamp: Date.now(),
        },
      ]);
    },
    [saveAnswer],
  );

  const resetResponses = useCallback(() => {
    responses.current = [];
  }, []);

  return {saveResponse, responses: responses.current, resetResponses};
};
