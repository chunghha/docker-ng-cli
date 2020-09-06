import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
	MatAutocompleteModule,
	MatButtonModule,
	MatCardModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatListModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule
];

@NgModule({
	imports: modules,
	exports: modules
})
export class AppMaterialModule {}
