import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TdMediaService } from '@covalent/core/media';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CountryDataService } from './providers/country-data.service';
import { AppState } from './store';
import { AddFilter, RemoveFilter } from './store/actions/filter.action';

export interface Country {
	name: string;
	subregion: string;
	population: number;
	capital: string;
	flag: string;
}

@UntilDestroy()
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [TdMediaService]
})
export class AppComponent implements AfterViewInit, OnInit {
	title = 'DockerNgCli';
	version = VERSION.full;

	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	displayedColumns = ['name', 'subregion', 'population', 'capital'];
	dataSource = new MatTableDataSource();

	countryCtrl = new FormControl();
	filteredCountries: Observable<Country[]>;
	countries: Country[] = [];

	searchedCountries: Country[] = [];
	searchInputTerm: string;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	@HostBinding('class') componentCssClass;

	constructor(
		public media: TdMediaService,
		public overlayContainer: OverlayContainer,
		private store: Store<AppState>,
		private _formBuilder: FormBuilder,
		private _countryData: CountryDataService
	) {
		_countryData
			.getAll()
			.pipe(untilDestroyed(this))
			.subscribe((countries: any) => {
				this.dataSource.data = countries;
				this.countries = countries;
				this.searchedCountries = countries;
			});

		this.filteredCountries = this.countryCtrl.valueChanges.pipe(
			startWith(''),
			map(country => (country ? this._filterCountries(country) : this.countries.slice()))
		);
	}

	ngOnInit() {
		this.setTheme();

		this.setPlayerTag();

		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});
	}

	/**
	 * Set the paginator after the view init since this component will
	 * be able to query its view for the initialized paginator.
	 */
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	searchCountries(name: string = ''): void {
		this.store.dispatch(new AddFilter(name));
		this.searchedCountries = this.countries.filter((country: Country) => {
			return country.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
		});
	}

	clearSearchTerm(name: string = ''): void {
		this.searchedCountries = this.countries;
		this.store.dispatch(new RemoveFilter());
	}

	private _filterCountries(value: string): Country[] {
		const filterValue = value.toLowerCase();

		return this.countries.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
	}

	private setTheme() {
		const effectiveTheme = 'LIGHT'.toLowerCase();
		this.componentCssClass = effectiveTheme;
		const classList = this.overlayContainer.getContainerElement().classList;
		const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
		classList.remove(...toRemove);
		classList.add(effectiveTheme);
	}

	private setPlayerTag() {
		const tag = document.createElement('script');

		tag.src = 'https://www.youtube.com/iframe_api';
		document.body.appendChild(tag);
	}
}
