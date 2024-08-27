import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteApi {
  private apiUrl = 'https://api.quotable.io/quotes';
  private shareUrl = 'https://twitter.com/intent/tweet?hashtags=Yazılım&text=';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  shareQuote(quote: string): void {
    window.open(this.shareUrl + quote, '_blank');
  }
}
