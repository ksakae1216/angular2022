import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  readonly pageSizeOptions = paginator.pageSizeOptions;
}
