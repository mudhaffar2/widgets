import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotsComponent } from './slots/slots.component';
import { OSRComponent } from './osr/osr.component';
import { ADComponent } from './ad/ad.component';
import { DesignComponent } from './design/design.component';
import { widgetDesignTabReducer } from './store/reducers/widget-design-tab.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SlotsComponent,
    OSRComponent,
    ADComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    StoreModule.forRoot({widgetSize: widgetDesignTabReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
