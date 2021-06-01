import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgflipService {
  data1: any;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://api.imgflip.com/get_memes').pipe(map(res=> {
      return res;
    }
  ))
  }
}
