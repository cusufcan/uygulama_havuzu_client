import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../entities/quote/quote-response';
import {
  IQuoteRepository,
  QUOTE_REPOSITORY_TOKEN,
} from '../interfaces/quote-repository.interface';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(
    @Inject(QUOTE_REPOSITORY_TOKEN)
    private readonly quoteRepository: IQuoteRepository
  ) {}

  getQuotes(): Observable<QuoteResponse> {
    return this.quoteRepository.getQuotes();
  }

  shareQuote(quote: string): void {
    this.quoteRepository.shareQuote(quote);
  }
}
