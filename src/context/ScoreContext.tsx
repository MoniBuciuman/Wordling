import {createContext, useMemo} from 'react';
import {ResponseType, useScore} from '../hooks/useScore';

export const ScoreContext = createContext({
  responses: [] as ResponseType[],
  saveResponse: (response: ResponseType) => {},
  resetResponses: () => {},
});

type ScoreProviderProps = {
  children: React.ReactNode;
};

export const ScoreProvider = ({children}: ScoreProviderProps) => {
  const {responses, saveResponse, resetResponses} = useScore();

  const value = useMemo(() => {
    return {responses, saveResponse, resetResponses};
  }, [resetResponses, responses, saveResponse]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};
