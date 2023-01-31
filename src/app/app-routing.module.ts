import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'index', component: IndexComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
