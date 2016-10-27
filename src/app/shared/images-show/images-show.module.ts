import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ImagesShowComponent } from './index';
import { ImageService } from '../service/image.service';

@NgModule({
    declarations: [
        ImagesShowComponent
    ],
    exports: [
        ImagesShowComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [
        ImageService
    ]
})
export class ImagesShowModule {
}
