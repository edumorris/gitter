import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitterComponent } from './gitter/gitter.component';
import { ProfileCollectorService } from './profile-collector.service';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GitterComponent,
    ReposComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileCollectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
