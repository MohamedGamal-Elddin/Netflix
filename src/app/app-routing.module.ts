import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ItemComponent } from './pages/item/item.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { PeopleComponent } from './pages/people/people.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard] },
  {path:'people',component:PeopleComponent,canActivate:[AuthenticationGuard] },
  {path:'favorite',component:FavoriteComponent,canActivate:[AuthenticationGuard] },
  {path:'movieDetails/:id',component:MovieDetailsComponent,canActivate:[AuthenticationGuard] },
  {path:'peopleDetails/:id',component:PeopleDetailsComponent,canActivate:[AuthenticationGuard] },
  {path:'search',component:SearchComponent,canActivate:[AuthenticationGuard] },
  {path:'login',component:LoginComponent },
  {path:'item',component:ItemComponent,canActivate:[AuthenticationGuard] },
  {path:'register',component:RegisterComponent },
  {path:'**',component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
