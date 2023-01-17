import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    auth(): Observable<any> {
        const apiUrl = 'https://oauth.vk.com/authorize';
        const params = {
            client_id: 51525532,
            display: 'popup',
            redirect_uri: 'http://localhost:4200',
            scope: 'groups',
            response_type: 'token',
            v: '5.131',
        };
        const queryParams = new HttpParams({ fromObject: params });

        return this.http.get<any>(apiUrl, { params: queryParams });
    }
}
