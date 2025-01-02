import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/landing-page/landing-page.routes').then((m) => m.routes),
    },
    {
        path: 'about',
        loadComponent: () => import('./modules/landing-page/about/about.component').then(c => c.AboutComponent),
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./modules/landing-page/contact/contact.component').then((c) => c.ContactComponent),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./modules/login/login.routes').then((m) => m.routes),
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./modules/register/register.routes').then((m) => m.routes),
    },
    { path: '**', redirectTo: '' },
];