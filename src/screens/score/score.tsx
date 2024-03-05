import * as React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import {answerAtom} from '../../state/answerAtom';
import {ImageView} from '../../components/image-view/image';
import {getScoreColor} from '../../constants/colors';
import {Score, calculateAndSortScores} from '../../utils/scoreCalculator';
import {Card} from 'react-native-paper';
import HighlightWordParts from '../../components/highlight-text/highlight-text';

export const ScoreScreen = () => {
  const answers = useRecoilValue(answerAtom);
  const answerScore = calculateAndSortScores(answers);

  return (
    <ImageBackground
      source={require('../../assets/images/empty_background.png')}
      style={[styles.backgroundImage]}>
      <SafeAreaView style={styles.container}>
        <FlatList
          columnWrapperStyle={styles.columnWrapperStyle}
          style={styles.flatListStyle}
          data={answerScore}
          renderItem={({item}) => <AnswerItem answer={item} />}
          numColumns={2}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListStyle: {
    width: '100%',
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  answerItemStyle: {
    height: 'auto',
    gap: 6,
    backgroundColor: 'grey',
    margin: 6,
    flexGrow: 1,
    padding: 8,
    borderRadius: 8,
  },
});

const AnswerItem = ({answer}: {answer: Score}) => {
  const {background, text} = getScoreColor(answer.score);
  return (
    <Card style={[styles.answerItemStyle, {backgroundColor: background}]}>
      <View style={{flexDirection: 'row'}}>
        <ImageView imageUri={answer.key} size={50} />
        <View style={{flex: 1, paddingHorizontal: 16}}>
          <Text style={{fontWeight: '700', color: text}}>Word</Text>
          <Text style={{fontWeight: '900', color: text, fontSize: 18}}>
            {answer.key}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: '700',
          color: text,
        }}>{`Score: ${answer.score.toFixed(2)}`}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontWeight: '700',
            flex: 1,
            flexWrap: 'wrap',
            color: text,
          }}>{`Answers: ${answer.answers
          .map(item => item.answer)
          .join(', ')}`}</Text>
      </View>
      <HighlightWordParts
        original={answer.key}
        attempts={answer.answers.map(item => item.answer ?? '')}
      />
    </Card>
  );
};
