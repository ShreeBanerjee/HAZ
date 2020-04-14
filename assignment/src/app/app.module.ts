import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/* ---------------Components Import------------------ */
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SearchComponent } from '@components/search/search.component';
import { HomeComponent } from '@components/home/home.component';
import { BookingsComponent } from '@components/bookings/bookings.component';
import { CommunicationComponent } from '@components/communication/communication.component';
import { EditProfileComponent } from '@components/edit-profile/edit-profile.component';

/* For current scenerio, used single module. For huge application shared module is prefer with lazy loading */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    BookingsComponent,
    CommunicationComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
