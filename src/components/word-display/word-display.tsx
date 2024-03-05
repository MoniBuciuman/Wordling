import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface WordDisplayProps {
  guessedLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({guessedLetters}) => {
  return (
    <View style={styles.container}>
      {guessedLetters.map((letter, index) => (
        <Text key={index} style={styles.letter}>
          {letter}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  letter: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default WordDisplay;
