
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NavbarComponent } from './shared/navbar/navbar.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './auth/services/token-interceptor.service';
import { MascotasComponent } from './mascotas/mascotas.component';
import { HomeComponent } from './home/home.component';
//import { FooterComponent } from './shared/footer/footer.component';
//import { ProfileComponent } from './auth/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
   // MascotasComponent,
   // FooterComponent,
   // ProfileComponent,
   // NavbarComponent,   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }
