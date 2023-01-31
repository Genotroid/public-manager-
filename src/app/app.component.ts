import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService, private cookieService: CookieService) {}

    ngOnInit(): void {
        console.log('cookie', this.cookieService.get('access_token'));
        console.log('cookie', this.cookieService.get('user_id'));
        console.log('cookie', this.cookieService.get('expires_in'));
        return;
    }
    title = 'publicManager';
}
