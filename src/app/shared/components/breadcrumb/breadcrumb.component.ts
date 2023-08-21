import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';

/** 麵包屑元件 */
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  /** Observable（可觀察者）：表示未來（future）值或事件的可呼叫集合的概念。 麵包屑 */
  breadcrumbs$!: Observable<Breadcrumb[]>;
  /** 麵包屑元件 - 建構子 */
  constructor(
    /** BreadcrumbService: 麵包屑服務 */
    private readonly breadcrumbService: BreadcrumbService,
    /** Router:內部調用Angular內部API路由與導航 */
    private router: Router
  ) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  /**
   * 前往的頁面
   *
   * @param $event - Link 事件
   * @param url - 欲前往的頁面連結
   * @returns 無回傳值
   */
  gotoPage($event: Event, url: string): void {
    $event.preventDefault();
    this.router.navigate([url]);
  }
}
