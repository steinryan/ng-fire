import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { MaterialModule } from './/material.module';
import { CoreModule } from './core/core.module';
import { RoutingModule } from './/routing.module';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
