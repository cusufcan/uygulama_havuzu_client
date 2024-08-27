export class Quote {
  constructor(
    public _id: string,
    public author: string,
    public content: string,
    public tags: string[]
  ) {}
}
