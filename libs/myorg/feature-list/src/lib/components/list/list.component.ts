import { SelectionModel } from '@angular/cdk/collections';
import { ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ElementList } from '@myorg/myorg/shared/api';
import * as paginator from '../../consts/paginator.const';
import { Paging } from '../../models/paging.model';

@Component({
  selector: 'myorg-list',
  standalone: true,
  imports: [
    CdkTableModule,
    OverlayModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTooltipModule
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

  readonly overlayPosition = [
    new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'center', overlayY: 'bottom' },
      0,
      -8
    ),
  ];

  readonly selection = new SelectionModel<ElementList>(true, []);

  readonly pageSizeOptions = paginator.pageSizeOptions;

  get selectedRows(): number {
    return this.selection.selected.length;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.elementList.length;
    return numSelected === numRows;
  }

  isSelectedOneOrMore(): boolean {
    return this.selection.selected.length > 0;
  }

  toggleAllSelection(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.elementList.forEach((row) => this.selection.select(row));
  }

  deleteData(): void {
    let message = '';
    this.selection.selected.forEach((row) => {
      message = message.concat(`${row.position}: ${row.name}, `);
    });

    alert(message);
  }
}
