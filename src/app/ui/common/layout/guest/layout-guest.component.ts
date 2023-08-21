import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/** 登入前的模板 */
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-layout-guest',
  templateUrl: './layout-guest.component.html',
  styleUrls: ['./layout-guest.component.scss'],
})
export class LayoutGuestComponent {}
