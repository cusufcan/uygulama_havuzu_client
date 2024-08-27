import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../entities/quote/quote-response';

export const QUOTE_REPOSITORY_TOKEN = new InjectionToken<IQuoteRepository>(
  'TodoRepository'
);

export interface IQuoteRepository {
  getQuotes(): Observable<QuoteResponse>;
  shareQuote(quote: string): Promise<void>;
}
