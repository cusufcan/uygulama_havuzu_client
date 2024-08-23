import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoApi {
  private apiUrl = 'http://localhost:5053/api/todo';

  create(title: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `${this.apiUrl}?title=${title}`;

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  }

  read(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', this.apiUrl, true);
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
      const url = `${this.apiUrl}?id=${id}&isCompleted=${isCompleted}`;

      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
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
      const url = `${this.apiUrl}?id=${id}`;

      xhr.open('DELETE', url, true);
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
}
