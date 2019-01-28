import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.page.html',
	styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
		console.log('SplashPage::ngOnInit | ');

		setTimeout(() => {
			console.log('SplashPage::ngOnInit | navigate to game page');
			// this.router.navigateByUrl('/home');
		}, 2500);
	}

}
