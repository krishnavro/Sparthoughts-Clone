import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MiddleComponent } from "./middle/middle.component";
import { HomeComponent } from './middle/home/home.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [HeaderComponent, MiddleComponent, HomeComponent, FooterComponent],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {

}
