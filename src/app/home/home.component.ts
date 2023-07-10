import { Component } from '@angular/core';
import { RoverService } from '../rover.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rovers: any[] = [];

  constructor(private roverService: RoverService) { }


}
