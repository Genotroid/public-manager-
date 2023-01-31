import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
    constructor(private cookieService: CookieService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const fragment = this.route.snapshot.fragment;
        const parts = fragment?.split('&');
        parts?.map(part => {
            const pieces = part.split('=');
            this.cookieService.set(pieces[0], pieces[1]);
        });
    }
}
