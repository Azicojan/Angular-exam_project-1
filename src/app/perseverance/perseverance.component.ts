import { Component } from '@angular/core';
import { RoverService } from '../rover.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-perseverance',
  templateUrl: './perseverance.component.html',
  styleUrls: ['./perseverance.component.css']
})
export class PerseveranceComponent {
  selectedDate!: string;
  photos: Photo[] = [];
  isSearchPerformed: boolean;

  constructor(private roverService: RoverService) {
    this.isSearchPerformed = false;
   }

   searchPhotos() {
    this.roverService.getPerseverancePhotos(this.selectedDate).subscribe(
      (data) => {
        this.photos = data.photos;
        this.isSearchPerformed = true;
      },
      (error) => {
        console.log('Error fetching photos:', error);
        this.isSearchPerformed = true;
      }
    );
  }

}
