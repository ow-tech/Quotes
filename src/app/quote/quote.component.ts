import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote ('Kim','quote'),
    new Quote ('alex', 'I will Be there'),
   ];

   newQuote={}




  //  quoteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }
  constructor() { }

  ngOnInit(){
  }

  addNewQuote(quote){
    // this.newQuote=new Quote(quote.author, quote.quote)
    // this.quotes.push(this.newQuote)
    this.quotes.push(quote);
    console.log(quote);
  }

}
