import React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import useWordGuessing from './type-word.hook';
import {ImageView} from '../../components/image-view/image';
import CustomKeyboard from '../../components/keyboard/keyboard';
import WordDisplay from '../../components/word-display/word-display';
import {useRoute} from '../../navigation/useRoute';
import {Text} from 'react-native-paper';

export const TypeWordScreen = () => {
  const {params} = useRoute();
  const {homeworkTitle} = params ?? {homeworkTitle: 'week 6'};

  const {
    currentWord,
    correctWord,
    guessedLetters,
    backgroundColor,
    disableKeyboard,
    handleKeyPress,
    handleRemove,
    handleSubmit,
  } = useWordGuessing(homeworkTitle);

  return (
    <ImageBackground
      source={require('../../assets/images/empty_background.png')}
      style={[styles.backgroundImage]}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={[styles.container, {backgroundColor}]}>
          <ImageView imageUri={currentWord.toLowerCase()} />
          <View>
            <Text style={styles.correctWordDisplay}>
              {correctWord.split('').join(' ').toUpperCase()}
            </Text>
            <WordDisplay guessedLetters={guessedLetters} />
          </View>
          <CustomKeyboard
            disable={disableKeyboard}
            onKeyPress={handleKeyPress}
            onRemove={handleRemove}
            onSubmit={handleSubmit}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 300, // Adjust to your needs
    height: 200, // Adjust to your needs
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  correctWordDisplay: {
    fontSize: 28,
    height: 60,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  letter: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
