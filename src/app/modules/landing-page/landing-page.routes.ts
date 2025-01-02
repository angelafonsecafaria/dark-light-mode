import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./about/about.component').then((c) => c.AboutComponent),
            },
            {
                path: 'contact',
                loadComponent: () =>
                    import('./contact/contact.component').then((c) => c.ContactComponent),
            },
        ],
    },
];