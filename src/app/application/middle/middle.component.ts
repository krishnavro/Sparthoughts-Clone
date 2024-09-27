import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-middle',
  standalone: true,
  imports: [HomeComponent,RouterOutlet],
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.css'
})
export class MiddleComponent {

}
