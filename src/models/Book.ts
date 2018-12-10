export class Book {
    isOn: boolean;
  
    constructor(public name: string, public author: string ) {
      this.isOn = false;
    }
  }