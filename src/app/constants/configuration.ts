import { environment } from '@env/environment';

/** 環境設定檔，取代 environments */
interface Configuration {
  /** 前端檔案的相對路徑 */
  basePath: string;
  /** API 的路徑 */
  apiPath: string;
  /** RouterLink prefix */
}

/** 本地開發 */
export const location: Configuration = {
  basePath: '',
  apiPath:
    environment.environment === 'json-server'
      ? environment.mock_server ?? '' // mock server
      : environment.dev_server ?? '', // dev server
};

/** 正式環境，使用 zuul */
const prod: Configuration = {
  /** 前端網址 webRoot */
  basePath: 'webRoot',

  /** Api endpoint */
  apiPath: 'api',
};

/** 判斷是否為本地開發 */
const isLocation = window.location.hostname === 'localhost';

/** 環境設定檔 - 常數 */
export const configurationConstant = isLocation ? location : prod;
