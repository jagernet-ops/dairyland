import Optional, { NoSuchElementException } from "../optional";
import type { Empty } from "../optional"

export class LocalStorageManager {

  static getItemString(keyName: string): Optional<string | Empty>  {
    const itemValue = localStorage.getItem(keyName);
    return Optional.ofNullable(itemValue);
  }

  static getItemObject(keyName: string): Optional<any | Empty>  {
    const itemValue = localStorage.getItem(keyName);
    return Optional.ofNullable(JSON.parse(itemValue!));
  }

  static getLength(): number {
    return localStorage.length;
  }

  static hasKey(keyName: string): boolean {
    const localStorageKeys = new Set<string>();
    for(let i = 0; i < localStorage.length; i++) {
      localStorageKeys.add(localStorage.key(i)!);
    }
    return localStorageKeys.has(keyName);
  }

  static clear(): void {
    if (localStorage.length > 0) {
      localStorage.clear();
    }
  }

  /**
  * @throws {NoSuchElementException} when provided
  * keyName does not exist in user localStorage
  */
  static removeItem(keyName: string): string {
    if (!LocalStorageManager.hasKey(keyName)) {
      throw new NoSuchElementException(`keyName: "${keyName}" is not a valid key-value pair for LocalStorage map!`);
    }
    const keyValue: string = localStorage.getItem(keyName)!;
    localStorage.removeItem(keyName);
    return keyValue;
  }

}
