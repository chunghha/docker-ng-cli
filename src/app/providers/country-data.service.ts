import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CountryDataService {
	constructor(private http: HttpClient) {}

	getAll<T = unknown>(): Observable<T> {
		return this.http.get('https://restcountries.eu/rest/v2/all') as Observable<T>;
	}
}
