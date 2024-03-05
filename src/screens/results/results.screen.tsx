import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {SCREENS} from '../../navigation/screens';
import {useResults} from './results.hook';
import Icon from 'react-native-vector-icons/Feather';

export const ResultsScreen = () => {
  const {message, responses, navigate, noOfCorrectAnswers} = useResults();

  return (
    <View style={styles.container}>
      <Icon
        name="home"
        size={30}
        onPress={() => navigate(SCREENS.HOME.DASHBOARD)}
      />
      <Image
        source={require('../../assets/images/results.png')}
        style={styles.resultsImage}
      />
      <Text
        style={
          styles.message
        }>{`You got ${noOfCorrectAnswers} / ${responses.length}`}</Text>
      <Text style={styles.message}>{message}</Text>
      <Button onPress={() => navigate(SCREENS.HOME.DASHBOARD)}>Home</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  message: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '900',
    color: '#4FAC9E',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center',
  },
  resultsImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#4FAC9E',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    width: '100%',
    margin: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  scrollView: {},
});
