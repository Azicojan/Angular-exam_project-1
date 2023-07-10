import { Component } from '@angular/core';
import { RoverService } from '../rover.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent {
  selectedDate!: string;
  photos: Photo[] = [];
  isSearchPerformed: boolean = false;

  constructor(private roverService: RoverService) { }

  searchPhotos() {
    this.roverService.getCuriosityPhotos(this.selectedDate).subscribe(
      (data: any) => {
        this.photos = data.photos;
        this.isSearchPerformed = true;
      },
      (error: any) => {
        console.log('Error fetching photos:', error);
        this.isSearchPerformed = true;
      }
    );
  }
}
