import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { AlbumModule } from './album/album.module';
import { ImageModule } from './image/image.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        NavbarModule,
        HomeModule,
        AlbumModule,
        ImageModule,
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
