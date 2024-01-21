import { CdkMenuModule } from '@angular/cdk/menu';

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'myorg-header-right',
  standalone: true,
  imports: [CdkMenuModule, MatIconModule],
  templateUrl: './header-right.component.html',
})
export class HeaderRightComponent {}
