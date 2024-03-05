import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useGuessPhonetic} from './guess-phonetic.hook';
import {ImageView} from '../../components/image-view/image';
import {GuessWord} from '../../components/guess-word/guess-word';
import {SpellingOptions} from '../../components/spelling-options/spelling-options';
import {useNavigation} from '../../navigation/useNavigation';
import {SCREENS} from '../../navigation/screens';

export const GuessPhoneticScreen = () => {
  const {selectedWord, onSelect, correctWord, isWrong, disableButtons} =
    useGuessPhonetic();
  const {navigate} = useNavigation();

  const speakWord = () => {
    console.log(selectedWord.word);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => speakWord()}>
        <ImageView imageUri={selectedWord.word} />
      </TouchableOpacity>
      <GuessWord
        guessWord={selectedWord.guessWord}
        correctWord={correctWord}
        isWrong={isWrong}
      />
      <SpellingOptions
        options={selectedWord.options}
        onSelect={onSelect}
        disableButtons={disableButtons}
      />
      <Button
        mode="elevated"
        onPress={() => navigate(SCREENS.HOME.DASHBOARD)}
        labelStyle={styles.buttonText}>
        Exit
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
  },
});
