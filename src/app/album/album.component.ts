import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'as-album',
    templateUrl: 'app/album/album.html'
})
export class AlbumComponent implements OnInit {
  id: number = -1;
  constructor(
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = +params['id'];
      }
    });
  }
}
