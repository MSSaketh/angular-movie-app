import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { OmdbSearchComponent } from './omdb-search/omdb-search.component';
import { FormsModule } from '@angular/forms';
import { OmdbSearchService } from './omdb-search.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MywishlistComponent,
    OmdbSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [OmdbSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
