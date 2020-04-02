import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quotes:Quote[]=[
  //  new Quote ('Kim','quote'),
  //  new Quote ('alex', 'I will Be there')
  // ];
}
