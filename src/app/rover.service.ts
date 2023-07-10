import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoverService {
  private apiKey = 'oypTr9r0pTkEw33dH35JH64A3kV7FmAH0BI4udZ5'; // Replace with your NASA API key

  constructor(private http: HttpClient) { }

  getPerseverancePhotos(date: string): Observable<any> {
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${date}&api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl);
  }

  getCuriosityPhotos(date: string): Observable<any> {
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl);
  }

  getSpiritPhotos(date: string): Observable<any> {
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${date}&api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl);
  }

  getOpportunityPhotos(date: string): Observable<any> {
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl);
  }



}
