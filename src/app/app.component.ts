import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './seg/body/body.component';
import { FooterComponent } from './seg/footer/footer.component';
import { MenuComponent } from './seg/menu/menu.component';
import { SliderComponent } from './seg/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BodyComponent, FooterComponent,MenuComponent,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chinche20';
}
