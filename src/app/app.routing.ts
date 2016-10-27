import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { AlbumRoutes } from './album/index';
import { ImageRoutes } from './image/index';

const appRoutes: Routes = [
    ...AlbumRoutes,
    ...ImageRoutes,
    ...HomeRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
