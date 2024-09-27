import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationComponent } from "./application/application.component";
import { HomeComponent } from './application/middle/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApplicationComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sparthoughts';
}
