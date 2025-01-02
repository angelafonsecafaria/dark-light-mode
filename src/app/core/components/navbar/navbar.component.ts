import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isDarkTheme: boolean = false;
  toggleDarkMode(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  // Armazena o estado dos dropdowns
  activeDropdown: string | null = null;

  // Alterna a visibilidade dos menus de dropdown
  toggleDropdown(dropdown: string): void {
    // Se o menu clicado já estiver aberto, fecha-o, caso contrário, abre-o
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdown;
    }
  }

  // Verifica se o dropdown está ativo
  isActive(dropdown: string): boolean {
    return this.activeDropdown === dropdown;
  }

  // Atualiza a cor secundária do tema
  updateSecondaryColor(event: Event) {
    const selectedColor = (event.target as HTMLSelectElement).value;
    this.setSecondaryColor(selectedColor);
  }

  // Define a cor secundária como uma variável CSS
  setSecondaryColor(color: string) {
    document.documentElement.style.setProperty('--secondary-color', color);
  }

  ngOnInit(): void {
    this.setSecondaryColor('#CA0088');
  }
}
