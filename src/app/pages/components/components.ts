import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class ComponentsComponent {}
