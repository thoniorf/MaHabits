import {MMKV} from 'react-native-mmkv';

type LocalStorageValuesType = string | number | boolean;
export namespace LocalStorage {
  export function save<ValueType extends LocalStorageValuesType>(
    key: string,
    value: ValueType,
  ) {
    MMKV.set(key, value);
  }
  export function loadAll(): string[] {
    return MMKV.getAllKeys();
  }
  export function loadString(key: string): string | undefined {
    return MMKV.getString(key);
  }
  export function loadNumber(key: string): number | undefined {
    return MMKV.getNumber(key);
  }
  export function loadBoolean(key: string): boolean | undefined {
    return MMKV.getBoolean(key);
  }
  export function remove(key: string) {
    MMKV.delete(key);
  }
}
