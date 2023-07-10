import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerseveranceComponent } from './perseverance/perseverance.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { SpiritComponent } from './spirit/spirit.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perseverance', component: PerseveranceComponent },
  { path: 'curiosity', component: CuriosityComponent },
  { path: 'spirit', component: SpiritComponent },
  { path: 'opportunity', component: OpportunityComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
