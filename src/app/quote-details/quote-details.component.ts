import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;

  constructor() { }

  ngOnInit() {
  }
  numberOfLikes: number=0;

  numberOfDislikes:number=0;

  likeButtonClick(){
    this.numberOfLikes++;
  }

  dislikeButtonClick(){
    this.numberOfDislikes++;
  
     } 

}
