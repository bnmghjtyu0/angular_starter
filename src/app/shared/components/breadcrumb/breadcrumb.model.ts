/** 麵包屑 */
export interface Breadcrumb {
  /** 路徑名稱 */
  label: string;
  /** 路徑url */
  url: string;
  /** 是否為當前路徑 */
  active: boolean;
  /** 點擊代碼 */
  functionId: string;
}
