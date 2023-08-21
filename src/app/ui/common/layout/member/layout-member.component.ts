import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '@app/shared/components/breadcrumb/breadcrumb.component';

/** 登入後的模板 */
@Component({
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent],
  selector: 'app-layout-member',
  templateUrl: './layout-member.component.html',
  styleUrls: ['./layout-member.component.scss'],
})
export class LayoutMemberComponent {}
