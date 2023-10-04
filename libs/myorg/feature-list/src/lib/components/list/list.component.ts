import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ElementList } from '@myorg/myorg/shared/api';
import * as paginator from '../../consts/paginator.const';

@Component({
  selector: 'myorg-list',
  standalone: true,
  imports: [
    CommonModule,
    CdkTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() loading = false;
  @Input() elementList: ElementList[] = [];
  @Input() elementTotalCount = 0;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  readonly pageSize = paginator.initPageSize;
  readonly pageSizeOptions = paginator.initPageSizeOptions;
}
