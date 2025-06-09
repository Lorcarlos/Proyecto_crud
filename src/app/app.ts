import { Component } from '@angular/core';
import { Home } from './home/home'; // asegúrate que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],  
  template: `<app-home></app-home>`, 
  styleUrls: ['./app.css']
})
export class App {
  title = 'Mi Aplicación Angular';
}
