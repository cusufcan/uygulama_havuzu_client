import { Component } from '@angular/core';
import { QuoteService } from '../../../../core/domain/services/quote.service';

@Component({
  selector: 'app-randomquotes',
  templateUrl: './randomquotes.component.html',
})
export class RandomquotesComponent {
  quote: string | null = null;

  constructor(private quoteService: QuoteService) {
    this.getQuote();
  }

  getQuote() {
    this.quoteService.getQuotes().subscribe((response) => {
      let randomNumber = this.getRandomNumber(response.count);
      this.quote =
        response.results[randomNumber].content +
        ' \n\n-' +
        response.results[randomNumber].author;
    });
  }

  shareQuote() {
    if (this.quote === null) {
      alert('Quote is not available');
      return;
    }
    this.quoteService.shareQuote(this.quote);
  }

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
