import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { ArticulosComponent } from './shared/articulos/articulos.component';
import { ZapatosComponent } from './shared/zapatos/zapatos.component';
import { PantalonesComponent } from './shared/pantalones/pantalones.component';
import { CamisetasComponent } from './shared/camisetas/camisetas.component';
import { PlayerasComponent } from './shared/playeras/playeras.component';
import { BlusasComponent } from './shared/blusas/blusas.component';
import { CamisasComponent } from './shared/camisas/camisas.component';
import { FichaComponent } from './layout/ficha/ficha.component';
import { CarrousellComponent } from './layout/carrousell/carrousell.component';
import { BannersComponent } from './layout/banners/banners.component';
import { CategoriasComponent } from './layout/categorias/categorias.component';
import { CategoriaComponent } from './layout/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ArticulosComponent,
    ZapatosComponent,
    PantalonesComponent,
    CamisetasComponent,
    PlayerasComponent,
    BlusasComponent,
    CamisasComponent,
    FichaComponent,
    CarrousellComponent,
    BannersComponent,
    CategoriasComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
