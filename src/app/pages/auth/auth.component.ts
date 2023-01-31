import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.less'],
})
export class AuthComponent implements OnInit {
    constructor(private authService: AuthService, private _renderer: Renderer2, private cookieService: CookieService) {}

    ngOnInit(): void {
        const width = 860;
        const height = 500;
        const left = screen.width / 2 - width / 2;
        const top = screen.height / 2 - height / 2;
        const windowOptions = `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${800}, height=${500}, top=${top}, left=${left}`;
        const type = 'auth';

        window.open(
            'https://oauth.vk.com/authorize?client_id=51525532&display=page&redirect_uri=http://localhost:4200/index/&scope=groups&response_type=token&v=5.131',
            type,
            windowOptions
        );
    }
}
