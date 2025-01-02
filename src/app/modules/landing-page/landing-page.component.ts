import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  isDefaultPage = true;  // Flag para controlar se a página é a default

  private routerSubscription: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Assina o evento de navegação para detectar quando a rota é ativada
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.isDefaultPage = event.url === '/';  // Verifica se a URL é a página inicial
      }
    });
  }

  ngOnDestroy(): void {
    // Desinscreve-se do evento de navegação quando o componente for destruído
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
