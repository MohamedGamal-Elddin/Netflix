
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarBackgroundDirective } from './directives/navbarBackground.directive';
import { HttpClientModule } from '@angular/common/http'
import { MovieApiService } from './service/movie-api.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShortWordsPipe } from './pipes/shortWords.pipe';
import { ItemComponent } from './pages/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { PageLoadingComponent } from './pages/page-loading/page-loading.component';
import { RunVideoDirective } from './directives/run-video.directive';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { CopyDetailsComponent } from './pages/copy-details/copy-details.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HourMinutePipe } from './pipes/hour-minute.pipe';
import { PeopleComponent } from './pages/people/people.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    NavbarBackgroundDirective,   //  custom directive
    ShortWordsPipe,
    ItemComponent,
    SearchPipe,
    AutoFocusDirective,
    PageLoadingComponent,
    RunVideoDirective,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NavbarComponent,
    FavoriteComponent,
    CopyDetailsComponent,
    MovieComponent,
    HourMinutePipe,
    PeopleComponent,
    PeopleDetailsComponent,
    FooterComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule, // Becouse i want to using pagination from primeng




  ],
  providers: [MovieApiService], // shared in all application
  bootstrap: [AppComponent]
})
export class AppModule { }
