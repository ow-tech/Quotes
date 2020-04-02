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
    this.quotes.unshift(quote);
    console.log(quote);
  }

  deleteQuote(quote){
    console.log(quote)

    for(var i=0; i<this.quotes.length; i++){
      if(this.quotes[i]==quote){
        this.quotes.splice(i, 1);
      }
    }
  }

}
