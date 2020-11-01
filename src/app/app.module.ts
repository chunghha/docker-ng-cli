import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
