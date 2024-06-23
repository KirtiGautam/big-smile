import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonService } from 'src/common.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CommonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
