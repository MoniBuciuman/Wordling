import {MMKV} from 'react-native-mmkv';

export const globalStorage = new MMKV({
  id: `storage`,
});

type RecoilAtoms = 'answerAtom';

export type StorageKeys = 'token' | RecoilAtoms;

export const clearGlobalStorage = (): void => {
  globalStorage.clearAll();
};

export const deleteStorageItem = (key: StorageKeys) => {
  globalStorage.delete(key);
};

export const setStorageItem = (
  key: StorageKeys,
  value: string | boolean,
): void => {
  globalStorage.set(key, value);
};

export const getStorageItem = (
  key: StorageKeys,
  type?: 'number' | 'boolean',
): string | boolean | number | null => {
  switch (type) {
    case 'boolean':
      return globalStorage.getBoolean(key) || false;
    case 'number':
      return globalStorage.getNumber(key) || false;
    default: {
      return globalStorage.getString(key) || null;
    }
  }
};
