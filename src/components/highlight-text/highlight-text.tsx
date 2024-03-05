import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HighlightWordPartsProps {
  original: string;
  attempts: string[];
}

const HighlightWordParts: React.FC<HighlightWordPartsProps> = ({
  original,
  // attempts,
}) => {
  // const areAllAttemptsCorrect = (
  //   correctWord: string,
  //   attempts: string[],
  // ): boolean => {
  //   return attempts.every(attempt => attempt === correctWord);
  // };

  // const allCorrect = areAllAttemptsCorrect(original, attempts);

  console.log('🚀 ~ file: highlight-text.tsx:10 ~ original:', original);
  // const getLetterStyles = (letter: string, index: number): object => {
  //   const isAlwaysCorrect = attempts.every(
  //     attempt => attempt[index] === letter,
  //   );
  //   console.log(
  //     '🚀 ~ file: highlight-text.tsx:12 ~ getLetterStyles ~ isAlwaysCorrect:',
  //     isAlwaysCorrect,
  //   );
  //   const isEverCorrect = attempts.some(attempt => attempt[index] === letter);

  //   if (isAlwaysCorrect) {
  //     return styles.consistentlyCorrect;
  //   } else if (!isEverCorrect) {
  //     return styles.consistentlyIncorrect;
  //   } else {
  //     return styles.inconsistentlyCorrect;
  //   }
  // };

  return (
    <View style={styles.wordContainer}>
      <Text style={styles.consistentlyCorrect}>{original}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: 'row',
    fontSize: 24,
    // additional styling
  },
  consistentlyCorrect: {
    backgroundColor: 'green', // replace with actual color code
    color: 'grey',
    fontSize: 24,
    // additional styling
  },
  consistentlyIncorrect: {
    backgroundColor: 'orange',
    fontSize: 24,
    // additional styling
  },
  inconsistentlyCorrect: {
    backgroundColor: 'yellow',
    fontSize: 24,
    // additional styling
  },
  // other styles...
});

export default HighlightWordParts;
