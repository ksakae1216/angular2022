import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ElementList } from '@myorg/myorg/shared/api';

@Component({
  selector: 'myorg-list',
  standalone: true,
  imports: [CommonModule, CdkTableModule, MatProgressSpinnerModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() loading = false;
  @Input() elementList: ElementList[] = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
