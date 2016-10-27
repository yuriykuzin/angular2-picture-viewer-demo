import { Routes } from '@angular/router';

import { ImageComponent } from './image.component';

export const ImageRoutes: Routes = [
  { path: 'image/:id',  component: ImageComponent }
];
