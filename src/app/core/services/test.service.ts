import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  private characters = [
    { name: 'Rahul', side: '' },
    { name: 'Swati', side: '' },
    { name: 'Reyaansh', side: '' }
  ];

  getCharacters(chosenList) {
    if (chosenList == 'all') {
      return this.characters.slice();
    }
    return this, this.characters.filter((char) => {
      return char.side == chosenList;
    })
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name == charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
  
}
