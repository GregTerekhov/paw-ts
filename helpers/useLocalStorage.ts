import { useState } from 'react';

interface UseLocalStorageProps<T> {
  key: string;
  initialValue: T;
}

type SetValue<T> = (value: T | ((val: T) => T)) => void;

export const useLocalStorage = <T>({
  key,
  initialValue,
}: UseLocalStorageProps<T>): [T, SetValue<T>] => {
  const [state, setState] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? (JSON.parse(value) as T) : initialValue;
    } catch (error) {
      console.error('Error during getting a localStorage value: ', error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.error('Error during setting a localStorage value: ', error);
    }
  };

  return [state, setValue];
};
