import { Injectable } from '@angular/core';
import { TokenService } from '../../domain/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class TodoApi {
  private apiUrl = 'http://localhost:5053/api/todo';

  constructor(private tokenService: TokenService) {}

  create(title: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${this.apiUrl}`;

      xhr.open('POST', url, true);
      this.getHeaders(xhr);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send(JSON.stringify({ title }));
    });
  }

  read(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', this.apiUrl, true);
      this.getHeaders(xhr);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  }

  update(id: number, isCompleted: boolean): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${this.apiUrl}`;

      xhr.open('PUT', url, true);
      this.getHeaders(xhr);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send(JSON.stringify({ id, isCompleted }));
    });
  }

  delete(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${this.apiUrl}`;

      xhr.open('DELETE', url, true);
      this.getHeaders(xhr);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send(JSON.stringify({ id }));
    });
  }

  private getHeaders(xhr: XMLHttpRequest) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'text/plain');
    xhr.setRequestHeader(
      'Authorization',
      `Bearer ${this.tokenService.getToken()?.token}`
    );
  }
}
