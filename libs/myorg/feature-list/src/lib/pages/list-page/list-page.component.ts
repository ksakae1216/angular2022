import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListContainerComponent } from '../../containers';

@Component({
  selector: 'myorg-list-page',
  standalone: true,
  imports: [CommonModule, ListContainerComponent],
  templateUrl: './list-page.component.html',
})
export class ListPageComponent {}
