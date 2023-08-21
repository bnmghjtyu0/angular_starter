import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { buffer, filter } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.model';

/** 麵包屑服務 */
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  /**
   * BehaviorSubject（行為主體）：Subjects 的變體之一是 BehaviorSubject，它具有“當前值”的概念。它儲存傳送給其消費者的最新值，並且每當有新的
   * Observer 訂閱時，它將立即從 BehaviorSubject 接收到“當前值”。
   */
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  /** 建立一個以此 Subject 為源的新 Observable。 */
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  /** 麵包屑服務 - 建構子 */
  constructor(
    /** Router:內部調用Angular內部API路由與導航 */
    private router: Router
  ) {
    /** 篩選「導航成功結束時觸發」的路由事件 */
    const routerEndEvent$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    /** 針對「導航成功結束時觸發」的路由事件進行訂閱 */
    this.router.events.pipe(buffer(routerEndEvent$)).subscribe((event) => {
      /** 當前路由器狀態樹的根節點 */
      const root = this.router.routerState.snapshot.root;
      /** 麵包屑列表 */
      const breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this._breadcrumbs$.next(breadcrumbs);
    });
  }

  /**
   * 加入麵包屑
   *
   * @param route - 當前元件相關的路由的當前瞬間資訊
   * @param parentUrl - 父層路由路徑
   * @param breadcrumbs - 麵包屑資料
   * @sealed
   */
  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ) {
    if (route) {
      /** 路由路徑 */
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
      if (route.data['breadcrumb']) {
        const breadcrumbsData = route.data['breadcrumb'];
        const transformBreadcrumbs = breadcrumbsData.map((d: any) => {
          return {
            label: this.getLabel(d, route),
            url: d.url,
            active: d.active,
            functionId: d?.functionId,
          };
        });

        breadcrumbs.push(...transformBreadcrumbs);
      }
      this.addBreadcrumb(route.firstChild!, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: any, route: ActivatedRouteSnapshot) {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
    return typeof data.label === 'function' ? data.label(data, route) : data.label;
  }
}
