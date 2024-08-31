import { Main } from './main';
import { Sys } from './sys';
import { Weather } from './weather';
import { Wind } from './wind';

export class WeatherResponse {
  static empty: any;
  constructor(
    public weather: Weather[] | null,
    public main: Main | null,
    public wind: Wind | null,
    public sys: Sys | null,
    public name: string | null
  ) {}
}
