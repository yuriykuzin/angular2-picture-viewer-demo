import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './image';

@Injectable()
export class ImageService {
  constructor(private http: Http) {
  }
  getImages(albumId?: number): Promise<Image[]> {
    return this.http
      .get((albumId == null) ?
        'http://jsonplaceholder.typicode.com/photos' :
        'http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos')
      .toPromise()
      .then(response => response.json() as Image[])
      .catch(this.handleError);
  }
  getImage(id: number): Promise<Image> {
    return this.http
      .get('http://jsonplaceholder.typicode.com/photos/' + String(id))
      .toPromise()
      .then(response => response.json() as Image)
      .catch(this.handleError);
  }
  getAlbumName(id: number): Promise<string> {
    return this.http
      .get('http://jsonplaceholder.typicode.com/albums/' + String(id))
      .toPromise()
      .then(response => response.json().title as string)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
