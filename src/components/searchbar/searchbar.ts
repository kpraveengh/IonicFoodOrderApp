import { Component } from '@angular/core';

/**
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent {

  text: string;

  constructor() {
    console.log('Hello SearchbarComponent Component');
    this.text = 'Hello World';
  }

}
