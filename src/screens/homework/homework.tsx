import * as React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SCREENS} from '../../navigation/screens';
import {useNavigation} from '../../navigation/useNavigation';

import homeworkJson from '../../assets/homework/homework.json';

const BOOK_COVER = [
  {source: require('../../assets/images/books/week_6.png')},
  {source: require('../../assets/images/books/week_7.png')},
  {source: require('../../assets/images/books/week_8.png')},
];

export const HomeworkScreen = () => {
  const {navigate} = useNavigation();

  const {width} = useWindowDimensions();
  const cardSize = width * 0.4;

  return (
    <ImageBackground
      source={require('../../assets/images/empty_background.png')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={homeworkJson}
          renderItem={({item, index}) => (
            <ImageBackground
              key={item.title}
              imageStyle={{borderRadius: 8}}
              source={BOOK_COVER[index].source}
              style={[
                styles.cardContainer,
                {height: cardSize, width: cardSize},
              ]}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() =>
                  navigate(SCREENS.HOME.TYPE_WORD, {
                    homeworkTitle: item.title,
                  })
                }>
                <View style={styles.titleContainer}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          )}
          numColumns={2}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardContainer: {
    margin: 6,
    borderRadius: 6,
  },
  titleContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#FFFFFFCC',
    alignItems: 'center',
  },
  safeAreaView: {
    marginTop: 24,
  },
  text: {
    color: 'rgb(14,21,39)',
    fontWeight: '800',
    fontSize: 20,
  },
});
