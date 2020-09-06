import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, reducers } from '../store';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule {}
