import { NgModule } from '@angular/core';
import { ImagesShowModule } from '../shared/images-show/index';
import { HomeComponent } from './index';

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        ImagesShowModule
    ]
})
export class HomeModule {
}
