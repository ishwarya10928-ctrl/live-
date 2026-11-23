import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-static-layouts',
  styleUrl: './static-layouts.css',
  templateUrl: './static-layouts.html',
})
export class StaticLayouts {}
