import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Quincy','Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you have settle. As with all matters of the heart','Mr.Kennedy'),
    new Quote ('Mandela','Of all the inventions of humans, the computer is going to rank near or at the top as history unfolds and we look back. It is the most awesome tool that we have ever invented. I feel incredibly lucky to be at exactly the right place in Silicon Valley, at exactly the right time, historically, where this invention has taken form.','Alex'),
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
