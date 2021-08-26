import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameCapitalsComponent } from './parts/game-capitals/game-capitals.component';
import { GameCardCapitalComponent } from './parts/game-capitals/game-card/game-card-capital.component';
import { GameCardFlagsComponent } from './parts/game-flags/game-card/game-card-flags.component';
import { GameFlagsComponent } from './parts/game-flags/game-flags.component';
import {HomeComponent} from './parts/home/home.component'


const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'game-capitals',component: GameCapitalsComponent},
  {path:'game-card-capital', component : GameCardCapitalComponent},
  {path:'game-flags',component:GameFlagsComponent},
  {path:'game-card-flags', component:GameCardFlagsComponent},
  {path:'**',redirectTo : '/home' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
