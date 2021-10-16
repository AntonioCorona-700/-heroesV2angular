import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as md5 from 'crypto-js/md5';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    getAuthParams(): HttpParams {
        const private_key: string = environment.private_key;
        const public_key: string = environment.public_key;
        const ts = new Date().getTime().toString();
        const hash = md5(ts + private_key + public_key).toString();
        const params = new HttpParams();
        return params.appendAll({'apikey': public_key, ts, hash});
    }
}
