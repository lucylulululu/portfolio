import {Component, Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class LocalStorage {
  langUpdated: EventEmitter<any>;

  constructor(){
    this.langUpdated = new EventEmitter();
  }

  getItem<T>(key: string): T {
    if (localStorage[key]) {
      return <T>JSON.parse(localStorage[key]);
    }
    return null;
  }

  setItem(key: string, item: any) {
    localStorage[key] = JSON.stringify(item);
    this.langUpdated.emit(localStorage[key]);
  }
}
