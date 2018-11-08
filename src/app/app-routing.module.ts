import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotsComponent } from './slots/slots.component';
import { OSRComponent } from './osr/osr.component';
import { ADComponent } from './ad/ad.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  { path: 'Slots', component: SlotsComponent },
  { path: 'Design', component: DesignComponent },
  { path: 'OSR', component: OSRComponent },
  { path: 'AD', component: ADComponent },
  { path: '', redirectTo: '/Slots', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
