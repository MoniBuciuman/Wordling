import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface TypeWordProps {
  onTextChanged: (text: string) => void;
  selectedWord: string;
}

export const TypeWord = ({selectedWord, onTextChanged}: TypeWordProps) => {
  const initialTextMask = '- '.repeat(selectedWord?.length ?? 0);
  const [textMask, setTextMask] = useState(initialTextMask);
  const [selection, setSelection] = useState({start: 0, end: 0});

  const prevText = useRef(initialTextMask);

  useEffect(() => {
    const mask = '- '.repeat(selectedWord?.length ?? 0);
    setTextMask(mask);
    setSelection({start: 0, end: 0});
    prevText.current = mask;
  }, [selectedWord]);

  const onChangeText = useCallback(
    (text: string) => {
      let textTyped = text.replace(/[\s-]/g, '');

      // This condition is true when Remove/Delete key is pressed
      if (prevText.current.length > text.length) {
        textTyped = textTyped.substring(0, textTyped.length - 1);
      }

      //
      if (textTyped.length <= selectedWord.length) {
        // This moves the cursor to the right, and we should trigger this until there are no more '-' characters.
        setSelection({start: textTyped.length * 2, end: textTyped.length * 2});
      }

      onTextChanged(textTyped);

      const textMapped = selectedWord.split('').map((character, index) => {
        if (index >= textTyped.length) {
          return '-';
        }
        return textTyped[index];
      });

      const textTypedMask = textMapped?.join(' ') + ' ';

      setTextMask(textTypedMask);
    },
    [onTextChanged, selectedWord],
  );

  return (
    <TextInput
      key={selectedWord}
      // eslint-disable-next-line react-native/no-inline-styles
      contentStyle={{
        backgroundColor: '#a9dda9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
      selection={selection}
      style={styles.textInput}
      value={textMask}
      onChangeText={onChangeText}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    fontSize: 42,
  },
});
