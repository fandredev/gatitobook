import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticationModule } from './autentication/autentication.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    AutenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
