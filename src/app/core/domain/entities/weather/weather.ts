export class Weather {
  constructor(
    public id: number | null,
    public main: string | null,
    public description: string | null,
    public icon: string | null
  ) {}
}
