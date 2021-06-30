import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Parts } from '../parts';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

	// 選択した項目
	selectedParts: Parts;

	// 一覧
	partslist: Parts[];

	// 新規登録用
	newParts: Parts;

	constructor(private partsService: PartsService,
		public changeDetectorRef: ChangeDetectorRef) { }

	// 初期化
	ngOnInit(): void {
		this.getParts();

		this.newParts = { code: "", name: "", cost: 0, nmbr: 0 };
	}

	// 一覧取得
	getParts(): void {
		this.partsService.getParts().subscribe(partslist => this.partslist = partslist);
	}

	// 選択操作
	onSelect(parts: Parts): void {
		this.selectedParts = parts;
	}

	// 作成操作
	onCreate(parts: Parts): void {
		this.partsService.createParts(parts);

		// 入力をクリア
		this.newParts = { code: "", name: "", cost: 0, nmbr: 0 };

		this.getParts();
		this.changeDetectorRef.detectChanges();
	}

	// 更新操作
	onUpdate(parts: Parts): void {
		this.partsService.updateParts(parts);
	}

	// 削除操作
	onDelete(parts: Parts): void {
		this.partsService.deleteParts(parts);
		this.getParts();
		this.changeDetectorRef.detectChanges();
	}

}
