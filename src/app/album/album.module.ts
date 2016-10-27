import { NgModule } from '@angular/core';
import { ImagesShowModule } from '../shared/images-show/index';
import { AlbumComponent } from './index';

@NgModule({
    declarations: [
        AlbumComponent
    ],
    exports: [
        AlbumComponent
    ],
    imports: [
        ImagesShowModule
    ]
})
export class AlbumModule {
}
