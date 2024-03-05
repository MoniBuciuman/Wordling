import {AtomEffect, DefaultValue} from 'recoil';
import {
  StorageKeys,
  deleteStorageItem,
  getStorageItem,
  setStorageItem,
} from './storage';

export function persistAtom<T>(key: StorageKeys): AtomEffect<T> {
  return ({setSelf, onSet}) => {
    const savedValue = getStorageItem(key);
    const selfValue =
      savedValue === null
        ? new DefaultValue()
        : (JSON.parse(savedValue as string) as T);

    setSelf(selfValue);

    onSet((newValue, _, isReset) => {
      isReset
        ? deleteStorageItem(key)
        : setStorageItem(key, JSON.stringify(newValue));
    });
  };
}
