import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { OmdbSearchComponent } from './omdb-search/omdb-search.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: '', component: DashboardComponent },
  {path: 'mywishlist', component: MywishlistComponent },
  {path: 'omdb', component: OmdbSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, MywishlistComponent];
