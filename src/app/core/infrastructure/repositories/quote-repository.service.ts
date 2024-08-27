import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuoteRepository } from '../../domain/interfaces/quote-repository.interface';
import { QuoteApi } from '../api/quote.api';

@Injectable({
  providedIn: 'root',
})
export class QuoteRepositoryService implements IQuoteRepository {
  constructor(private readonly quoteApi: QuoteApi) {}

  getQuotes(): Observable<any> {
    return this.quoteApi.getQuotes();
  }

  shareQuote(quote: string): any {
    this.quoteApi.shareQuote(quote);
  }
}
