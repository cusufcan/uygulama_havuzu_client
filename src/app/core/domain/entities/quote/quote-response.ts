import { Quote } from './quote';

export class QuoteResponse {
  constructor(
    public count: number,
    public totalCount: number,
    public page: number,
    public totalPages: number,
    public lastItemIndex: number,
    public results: Quote[]
  ) {}
}
