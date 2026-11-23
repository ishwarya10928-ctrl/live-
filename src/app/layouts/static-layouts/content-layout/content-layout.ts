import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-content-layout',
  styleUrl: './content-layout.css',
  templateUrl: './content-layout.html',
})
export class ContentLayout {}
