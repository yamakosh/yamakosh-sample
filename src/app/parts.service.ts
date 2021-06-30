import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../environments/environment';
import { Parts } from './parts';
import { Observable, of } from 'rxjs';

//import { MKPARTS } from './parts/mock-parts';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

	private serviceUrl = environment.serviceUrl;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json' }),
			'Access-Control-Allow-Origin': '*'
	};

	constructor(
		private http: HttpClient) { }

	// 全件取得
	getParts(): Observable<Parts[]> {
//		return of(MKPARTS);
		return this.http.get<Parts[]>(this.serviceUrl);
	}

	private dummyData;

	// 登録
	createParts(parts: Parts): void {
		this.http.post<any>(this.serviceUrl, parts, this.httpOptions)
			.subscribe(data => { this.dummyData = data });
	}

	// 更新
	updateParts(parts: Parts): void {
		this.http.put<any>(this.serviceUrl, parts, this.httpOptions)
			.subscribe(data => { this.dummyData = data });
	}

	// 削除
	deleteParts(parts: Parts | number): void {
		const code = typeof parts === 'number' ? parts : parts.code;
		const url = `${this.serviceUrl}/${code}`;

		this.http.delete<any>(url, this.httpOptions)
			.subscribe(data => { this.dummyData = data });
	}

}
