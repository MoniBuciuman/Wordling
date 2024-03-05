/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {ScoreProvider} from './context/ScoreContext';
import {RecoilRoot} from 'recoil';
import MainStack from './navigation/stacks/main-stack';
import {GPT_BACKGROUND} from './constants/colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: GPT_BACKGROUND,
    card: GPT_BACKGROUND,
  },
};

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <PaperProvider>
        <ScoreProvider>
          <NavigationContainer theme={MyTheme}>
            <MainStack />
          </NavigationContainer>
        </ScoreProvider>
      </PaperProvider>
    </RecoilRoot>
  );
}

export default App;
