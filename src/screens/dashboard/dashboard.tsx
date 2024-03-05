import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {SCREENS} from '../../navigation/screens';
import {useNavigation} from '../../navigation/useNavigation';

export const DashboardScreen = () => {
  const {navigate} = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/dashboard_background.png')}
      style={styles.backgroundImage}>
      <View style={styles.buttonsView}>
        <Button
          mode="contained"
          buttonColor="#DC4338"
          onPress={() => navigate(SCREENS.HOME.HOMEWORK)}>
          <Text style={styles.text}>Homework</Text>
        </Button>
        <Button
          mode="contained"
          buttonColor="#FAD02E"
          onPress={() => navigate(SCREENS.HOME.IMPROVEMENT)}>
          <Text style={styles.text}>Improvement</Text>
        </Button>
        <Button
          mode="contained"
          buttonColor="#DC4338"
          onPress={() => navigate(SCREENS.HOME.SCORE)}>
          <Text style={styles.text}>Score</Text>
        </Button>
      </View>
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
  buttonsView: {
    flexDirection: 'column',
    marginBottom: '10%',
    gap: 24,
  },
  text: {
    color: 'rgb(14,21,39)',
    fontWeight: '800',
    fontSize: 20,
  },
});
