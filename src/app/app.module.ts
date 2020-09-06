import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { TdMediaService } from '@covalent/core/media';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';

import { AppMaterialModule } from './app-material.module';
import { AppStoreModule } from './store/app-store.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
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
	providers: [TdMediaService],
	bootstrap: [AppComponent]
})
export class AppModule {}
