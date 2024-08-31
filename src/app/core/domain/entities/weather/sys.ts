export class Sys {
  constructor(
    public type: number | null,
    public id: number | null,
    public message: number | null,
    public country: string | null,
    public sunrise: number | null,
    public sunriseString: string | null,
    public sunset: number | null
  ) {}
}
