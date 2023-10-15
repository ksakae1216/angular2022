import { SelectionModel } from '@angular/cdk/collections';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ElementList } from '@myorg/myorg/shared/api';
import * as paginator from '../../consts/paginator.const';
import { Paging } from '../../models/paging.model';

@Component({
  selector: 'myorg-list',
  standalone: true,
  imports: [
    CommonModule,
    CdkTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() loading = false;
  @Input() elementList: ElementList[] = [];
  @Input() paging: Paging | null = null;

  @Output() pageAction = new EventEmitter<PageEvent>();

  readonly displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];

  readonly selection = new SelectionModel<ElementList>(true, []);

  readonly pageSizeOptions = paginator.pageSizeOptions;

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.elementList.length;
    return numSelected === numRows;
  }

  toggleAllSelection(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.elementList.forEach((row) => this.selection.select(row));
  }
}
