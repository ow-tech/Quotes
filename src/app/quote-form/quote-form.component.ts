import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // quotes:Quote[]=[
  //   new Quote ('Kim','quote'),
  //   new Quote ('alex', 'I will Be there')
  newQuote = new Quote("","","");
@Output() addQuote= new EventEmitter<Quote>();

submitQuote(){
  this.addQuote.emit(this.newQuote);
  // reseting of form
  this.newQuote = new Quote("","","");
}
  constructor() { }

  ngOnInit(){
  }

}
