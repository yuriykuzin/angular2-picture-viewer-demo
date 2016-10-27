import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../service/image.service';
import { Image } from '../service/image';

@Component({
    selector: 'as-images-show',
    templateUrl: './app/shared/images-show/images-show.html'
})
export class ImagesShowComponent implements OnInit {
  @Input()
  albumId: number;
  albumName: string = '';
  images: Image[] = [];
  imagesToShow: Image[] = [];
  constructor(
    private imageService: ImageService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.imageService
      .getImages(this.albumId)
      .then(images => {
        this.images = images;
        this.imagesToShow = images.slice(0, Math.min(9, images.length));
      })
      .catch(error => console.log(error));
    if (this.albumId !== undefined) {
      this.imageService
      .getAlbumName(this.albumId)
      .then(albumName => this.albumName = albumName)
      .catch(error => console.log(error));
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScrollDown() {
    let scrollMax = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ) - window.innerHeight - 50;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= scrollMax && this.images.length > this.imagesToShow.length) {
      // Show 6 more images if possible
      let addTo = Math.min(6, this.images.length - this.imagesToShow.length) + this.imagesToShow.length;
      this.imagesToShow = this.imagesToShow.concat(this.images.slice(this.imagesToShow.length, addTo));
    }
  }
}
