import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componets/menu-bar/menu-bar.component';
import { MenuTittleComponent } from './componets/menu-tittle/menu-tittle.component';
import { BigCardComponent } from './componets/big-card/big-card.component';
import { SmallCardComponent } from './componets/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTittleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
