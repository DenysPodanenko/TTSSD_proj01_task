import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BigDataComponent } from './features/big-data/big-data.component';
import { DynmicContentComponent } from './features/dynmic-content/dynmic-content.component';
import { NeuromarketingComponent } from './features/neuromarketing/neuromarketing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'big-data',
    component: BigDataComponent,
  },
  {
    path: 'dynamic-content',
    component: DynmicContentComponent,
  },
  {
    path: 'neuromarketing',
    component: NeuromarketingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
