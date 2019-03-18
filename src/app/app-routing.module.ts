import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from './result/result.component';
import { SelectComponent } from './select/select.component';
import { LandingComponent } from './landing/landing.component';
import { SansaResultComponent } from './result/sansa-result/sansa-result.component';
import { AryaResultComponent } from './result/arya-result/arya-result.component';
import { BranResultComponent } from './result/bran-result/bran-result.component';
import { SamResultComponent } from './result/sam-result/sam-result.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'select', component: SelectComponent},
  {path: 'results', component: ResultComponent},
  {path: 'sansa', component: SansaResultComponent},
  {path: 'arya', component: AryaResultComponent},
  {path: 'bran', component: BranResultComponent},
  {path: 'sam', component: SamResultComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
