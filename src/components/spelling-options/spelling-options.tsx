import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

interface SpellingOptions {
  options: string[];
  disableButtons: boolean;
  onSelect: (item: string) => void;
}

export const SpellingOptions = ({
  options,
  disableButtons,
  onSelect,
}: SpellingOptions) => {
  return (
    <View style={styles.optionButtons}>
      {options.map(item => (
        <Button
          disabled={disableButtons}
          key={item}
          style={[
            styles.button,
            {backgroundColor: disableButtons ? '#E9E9E9' : '#FBA15D'},
          ]}
          mode="elevated"
          onPress={() => onSelect(item)}>
          <Text style={styles.buttonText}>{item}</Text>
        </Button>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
  },
  button: {
    margin: 10,
    borderRadius: 15,
    width: '40%',
    height: 40,
    backgroundColor: '#FBA15D',
  },
  optionButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
    alignItems: 'center',
  },
});
