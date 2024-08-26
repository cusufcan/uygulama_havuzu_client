export class Token {
  constructor(
    public authResult: boolean,
    public token: string,
    public tokenExpireDate: Date
  ) {}
}
