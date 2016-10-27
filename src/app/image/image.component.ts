import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ImageService } from '../shared/service/image.service';
import { Image } from '../shared/service/image';

@Component({
    selector: 'as-image',
    templateUrl: 'app/image/image.html'
})
export class ImageComponent implements OnInit {
  id: number = -1;
  image: Image = new Image();
  albumName: string = '';
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = +params['id'];
      }
    });
    this.imageService.getImage(this.id)
      .then(image => this.image = image)
      .then(image => this.imageService.getAlbumName(image.albumId))
      .then(albumName => this.albumName = albumName)
      .catch(error => console.log(error));
  }
}
