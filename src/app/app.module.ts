import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TransferModule } from './transfer/transfer.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TransferModule,
    UserModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: getCurentLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getCurentLocale(): string {
  return localStorage.getItem('Language') || 'en';
}
