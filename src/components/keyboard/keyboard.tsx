import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {GPT_BLUE, GPT_GREEN, GPT_RED} from '../../constants/colors';

interface CustomKeyboardProps {
  disable?: boolean;
  onKeyPress: (key: string) => void;
  onRemove: () => void;
  onSubmit: () => void;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({
  disable = false,
  onKeyPress,
  onRemove,
  onSubmit,
}) => {
  console.log('🚀 ~ file: keyboard.tsx:18 ~ disable:', disable);
  // Array of alphabet letters
  const letters = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];

  return (
    <View style={styles.container}>
      {letters.map(letter => (
        <KeyBtn
          style={styles.key}
          key={letter}
          disable={disable}
          text={letter}
          onKeyPress={onKeyPress}
        />
      ))}

      <KeyBtn
        style={styles.submitKey}
        disable={disable}
        text={'SUBMIT'}
        onKeyPress={onSubmit}
      />
      <KeyBtn
        style={styles.deleteKey}
        disable={disable}
        text={'DELETE'}
        onKeyPress={onRemove}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  },
  key: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: GPT_BLUE, // Adjust color as necessary
  },
  deleteKey: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: GPT_RED, // Adjust color as necessary
  },
  submitKey: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: GPT_GREEN, // Adjust color as necessary
  },
  keyText: {
    fontSize: 20, // Adjust font size as necessary
    color: 'white',
    fontWeight: '700',
  },
  deleteKeyText: {
    fontSize: 24, // Adjust font size as necessary
    fontWeight: '700',
    color: 'white',
  },
});

export default CustomKeyboard;

interface KeyBtnProps {
  myKey?: string;
  disable?: boolean;
  text: string;
  style?: StyleProp<ViewStyle>;
  onKeyPress: (key: string) => void;
}

const KeyBtn = ({myKey, disable, text, style, onKeyPress}: KeyBtnProps) => (
  <TouchableOpacity
    disabled={disable}
    key={myKey}
    style={style}
    onPress={() => onKeyPress(text)}>
    <Text style={styles.keyText}>{text}</Text>
  </TouchableOpacity>
);
