import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { TdMediaService } from '@covalent/core/media';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';

import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';

describe('AppComponent', () => {
	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				imports: [
					BrowserAnimationsModule,
					FormsModule,
					ReactiveFormsModule,
					RouterModule,
					HttpClientModule,
					ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
					FlexLayoutModule,
					CovalentMessageModule,
					CovalentSearchModule,
					CovalentLayoutModule,
					CovalentVirtualScrollModule,
					YouTubePlayerModule,
					AppMaterialModule,
					AppStoreModule
				],
				declarations: [AppComponent],
				providers: [TdMediaService]
			}).compileComponents();
		})
	);

	it(
		'should create the app',
		waitForAsync(() => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.debugElement.componentInstance;
			expect(app).toBeTruthy();
		})
	);

	it(
		`should have as title 'app works!'`,
		waitForAsync(() => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.debugElement.componentInstance;
			expect(app.title).toEqual('DockerNgCli');
		})
	);

	it(
		'should render title in the mat-card-title tag',
		waitForAsync(() => {
			const fixture = TestBed.createComponent(AppComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('mat-card-title').textContent).toContain('DockerNgCli');
		})
	);
});
