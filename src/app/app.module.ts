import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
    declarations: [AppComponent, AuthComponent, IndexComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
