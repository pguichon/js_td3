import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ListItemComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
