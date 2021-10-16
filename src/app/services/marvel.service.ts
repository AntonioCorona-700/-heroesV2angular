import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { environment } from 'src/environments/environment';
import { map, retry } from 'rxjs/operators'

import { ApiCall } from '../models/call.model';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  constructor(
      private httpclient: HttpClient,
      private authService: AuthService
    ) { }

    getCharacters() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
            }),
            params: this.authService.getAuthParams().append('limit', 50)
        }

        const url = environment.URL + 'characters';
        return this.httpclient.get<ApiCall<Hero>>(url, httpOptions).pipe(
            map(result => {
                if (result.status === 'Ok' && result.code === 200) {
                    return result.data.total > 0 ? result.data.results : [];
                } else {
                    return [];
                }
            }), retry(1)
        );
    }
    

    getCharacterById(id: number) {//string
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': '*/*'
            }),
            params: this.authService.getAuthParams()
        }
        const url = `${environment.URL}characters/${id}`;
        return this.httpclient.get(url, httpOptions).subscribe();
    }

}
