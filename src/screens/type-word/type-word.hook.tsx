import {useContext, useEffect, useState} from 'react';
import homework from '../../assets/homework/homework.json';
import {ScoreContext} from '../../context/ScoreContext';
import {GPT_BACKGROUND} from '../../constants/colors';

const useWordGuessing = (homeworkTitle: string) => {
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [letterEntryOrder, setLetterEntryOrder] = useState<number[]>([]);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    `${GPT_BACKGROUND}00`,
  );
  const [correctWord, setCorrectWord] = useState<string>('');
  const [disableKeyboard, setDisableKeyboard] = useState<boolean>(false);

  const {saveResponse} = useContext(ScoreContext);

  useEffect(() => {
    setWords(homework.find(({title}) => title === homeworkTitle)?.words ?? []);
  }, [homeworkTitle]);

  useEffect(() => {
    if (words.length > 0) {
      setGuessedLetters(Array(words[currentIndex].length).fill('-'));
      setLetterEntryOrder([]);
    }
  }, [words, currentIndex]);

  const handleKeyPress = (key: string) => {
    const newGuessedLetters = [...guessedLetters];
    const dashIndex = newGuessedLetters.indexOf('-');
    if (dashIndex !== -1) {
      newGuessedLetters[dashIndex] = key;
      setGuessedLetters(newGuessedLetters);
      setLetterEntryOrder(prevOrder => [...prevOrder, dashIndex]);
    }
  };

  const handleRemove = () => {
    const newGuessedLetters = [...guessedLetters];
    const newLetterEntryOrder = [...letterEntryOrder];

    // Check if there are any letters to remove
    const lastEnteredIndex = newLetterEntryOrder.pop(); // Remove the last index
    if (lastEnteredIndex !== undefined) {
      newGuessedLetters[lastEnteredIndex] = '-'; // Update guessedLetters
      setGuessedLetters(newGuessedLetters);
      setLetterEntryOrder(newLetterEntryOrder);
    }
  };

  const handleSubmit = () => {
    setDisableKeyboard(true);
    const guessedWord = guessedLetters.join('');
    let timer = 1000;
    const isCorrect =
      guessedWord.toLowerCase() === words[currentIndex].toLowerCase();
    if (isCorrect) {
      setBackgroundColor('#9CFFBC99');
      setCorrectWord(''); // Reset correct word since the guess is correct
    } else {
      setBackgroundColor('#FF9D9D99');
      setCorrectWord(words[currentIndex]); // Set the correct word
      timer = 3000;
    }

    saveResponse({
      value: words[currentIndex].toLowerCase(),
      answer: guessedWord,
      status: isCorrect ? 'correct' : 'wrong',
    });
    setTimeout(() => {
      nextWord();
    }, timer);
  };

  const nextWord = () => {
    setDisableKeyboard(false);
    setBackgroundColor(`${GPT_BACKGROUND}00`);
    setCorrectWord(''); // Reset correct word for the next word
    setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
  };

  return {
    currentWord: words.length > 0 ? words[currentIndex] : '',
    correctWord, // Add correctWord to the returned object
    guessedLetters,
    backgroundColor,
    disableKeyboard,
    handleKeyPress,
    handleRemove,
    handleSubmit,
  };
};

export default useWordGuessing;
