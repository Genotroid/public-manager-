import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
            display: 'page',
            scope: 'groups',
            redirect_uri: 'http://localhost:4200',
            response_type: 'token',
        };
        const queryParams = new HttpParams({ fromObject: params });

        return this.http.get<any>(apiUrl, { params: queryParams });
    }
}
