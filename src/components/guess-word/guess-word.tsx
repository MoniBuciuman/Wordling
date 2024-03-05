import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

interface GuessWordProps {
  guessWord: string;
  isWrong: boolean;
  correctWord: string | null;
}

export const GuessWord = ({
  guessWord,
  isWrong,
  correctWord,
}: GuessWordProps) => {
  if (!isWrong && correctWord) {
    return (
      <View style={styles.containerCorrect}>
        <Text style={styles.text}>{correctWord}</Text>
      </View>
    );
  }

  const spliced = guessWord.split(' ');

  return (
    <View style={styles.horizontalStyle}>
      {spliced.map((text, index) => (
        <View key={`${text}-${index}`} style={styles.horizontalStyle}>
          {text === '_' ? (
            <View style={[styles.guess, isWrong ? styles.wrong : undefined]} />
          ) : (
            <Text style={styles.text}>{text}</Text>
          )}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  containerCorrect: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 4,
    height: 50,
  },
  horizontalStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  guess: {
    width: 50,
    height: 50,
    backgroundColor: '#a9a9a9',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 40,
    alignContent: 'center',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  correct: {
    backgroundColor: 'green',
  },
  wrong: {
    backgroundColor: 'red',
  },
});
