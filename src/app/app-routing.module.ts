import { DetailsComponent } from './pages/characters/details/details.component';
import { CastComponent } from './pages/cast/cast.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './pages/episodes/episodes.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'cast', component: CastComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'characters/details/:id', component: DetailsComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
