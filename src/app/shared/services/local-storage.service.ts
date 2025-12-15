import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  /**
   * This Function Sets the key-value pair into the local storage
   * @param key - the set key
   * @param value - the set value
   */
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * This Function gets the key-value from the local storage
   * @param key - the already set key
   * @returns 
   */
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * This Function removes the key-value from the local storage
   * @param key 
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * This Function clears all key-values from the local storage
   */
  clear(): void {
    localStorage.clear();
  }
}
