import { NgModule } from '@angular/core';
import { ImageService } from '../shared/service/image.service';
import { ImageComponent } from './index';

@NgModule({
    declarations: [
        ImageComponent
    ],
    exports: [
        ImageComponent
    ],
    providers: [
        ImageService
    ]
})
export class ImageModule {
}
