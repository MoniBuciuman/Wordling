import {useCallback, useContext, useRef, useState} from 'react';
import words from '../../assets/homework/words.json';
import {ScoreContext} from '../../context/ScoreContext';
import {SCREENS} from '../../navigation/screens';
import {useNavigation} from '../../navigation/useNavigation';

export type Word = {
  guessWord: string;
  word: string;
  options: string[];
};

export const useGuessPhonetic = () => {
  const {saveResponse} = useContext(ScoreContext);
  const {navigate} = useNavigation();

  const [currentWord, setCurrentWord] = useState<Word>(words[0]);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [correctWord, setCorrectWord] = useState<string | null>(null);
  const currentIndex = useRef(0);
  const disableButtons = useRef(false);

  const onSelect = useCallback(
    (phonetic: string) => {
      const selected = currentWord.guessWord.replace(' _ ', phonetic);
      const isCorrect = selected === currentWord.word;
      setIsWrong(!isCorrect);
      setCorrectWord(isCorrect ? currentWord.word : null);
      if (!disableButtons.current) {
        saveResponse({
          value: currentWord.word,
          status: isCorrect ? 'correct' : 'wrong',
          answer: selected,
        });
      }
      disableButtons.current = true;
      setTimeout(() => {
        onSubmit();
      }, 1000);
    },
    [currentWord, saveResponse],
  );

  const onSubmit = useCallback(() => {
    disableButtons.current = false;
    setIsWrong(false); // reset status
    setCorrectWord(null); // reset status
    currentIndex.current += 1;
    if (currentIndex.current >= words.length) {
      currentIndex.current = 0;
      navigate(SCREENS.HOME.RESULTS);
    }
    setCurrentWord(words[currentIndex.current]);
  }, []);

  return {
    selectedWord: currentWord,
    onSubmit,
    onSelect,
    isWrong,
    correctWord,
    disableButtons: disableButtons.current,
  };
};
