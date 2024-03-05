import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../screens';
import {DashboardScreen} from '../../screens/dashboard/dashboard';
import {HomeworkScreen} from '../../screens/homework/homework';
import {TypeWordScreen} from '../../screens/type-word/type-word.screen';
import {ResultsScreen} from '../../screens/results/results.screen';
import {ScoreScreen} from '../../screens/score/score';
import {GuessPhoneticScreen} from '../../screens/guess-phonetic/guess-phonetic.screen';
import {ImprovementScreen} from '../../screens/improvement/improvement.screen';

const Stack = createNativeStackNavigator();

function MainStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.DASHBOARD}
        component={DashboardScreen}
      />
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.HOMEWORK}
        component={HomeworkScreen}
      />
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.GUESS_PHONETIC}
        component={GuessPhoneticScreen}
      />
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.TYPE_WORD}
        component={TypeWordScreen}
      />
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.RESULTS}
        component={ResultsScreen}
      />
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.SCORE}
        component={ScoreScreen}
      />
      <Stack.Screen
        options={{headerTransparent: true, headerBackTitleVisible: false}}
        name={SCREENS.HOME.IMPROVEMENT}
        component={ImprovementScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
