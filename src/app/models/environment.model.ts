/** 程式環境 */
export interface Environment {
  /** 版本號 */
  version?: string;
  /** 環境名稱 */
  environment: string;
  /** 是否為 production 模式 */
  production: boolean;
  /** 本地開發伺服器 */
  dev_server?: string;
  /** Mock 伺服器 */
  mock_server?: string;
}
