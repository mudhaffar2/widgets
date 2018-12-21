import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';
import { OSRComponent } from './osr/osr.component';
import { ADComponent } from './ad/ad.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  { path: 'widget-design', component: DesignComponent },
  { path: 'slots-settings', component: SlotsComponent },
  { path: 'osr-slot-design', component: OSRComponent },
  { path: 'ad-slot-design', component: ADComponent },
  { path: '', redirectTo: '/widget-design', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
