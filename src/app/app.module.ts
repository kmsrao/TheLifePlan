import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { FormsModule } from '@angular/forms';
import { SipinvestmentComponent } from './sipinvestment/sipinvestment.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PersonalLoanComponent,
    SipinvestmentComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
