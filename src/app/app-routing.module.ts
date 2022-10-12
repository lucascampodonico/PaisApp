import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';

const routes: Routes = [
  {
    path: 'region',
    component: PorRegionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
