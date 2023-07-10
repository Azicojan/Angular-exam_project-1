import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerseveranceComponent } from './perseverance/perseverance.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { SpiritComponent } from './spirit/spirit.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerseveranceComponent,
    CuriosityComponent,
    SpiritComponent,
    OpportunityComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
