import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
	{ path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
	{ path: 'game', loadChildren: './pages/game/game.module#GamePageModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
