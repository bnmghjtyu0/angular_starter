import { Route } from '@angular/router';
import { LayoutMemberComponent } from './ui/common/layout/member/layout-member.component';
import { HomeComponent } from './ui/pages/home/home.component';

/** 根路由 */
export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: '',
    component: LayoutMemberComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => HomeComponent,
        data: {
          breadcrumb: [
            {
              label: '首頁',
              url: '/home',
            },
          ],
        },
      },
    ],
  },
];
