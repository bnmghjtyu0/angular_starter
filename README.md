# 安達人壽 Angular - 前台

## 開發環境需求

- [Nodejs >=16](https://nodejs.org/zh-tw/)
- [VSCode](https://code.visualstudio.com/)
  - P.S. 安裝專案下 .vscode/settings.json 所列的 extension
- [Angular CLI 12.x](https://angular.io/cli)
  - npm install -g @angular/cli

## 目錄架構

```sh
├── .husky                        # 設定 git hooks
├── .vscode                       # 此專案的 vscode 設定
│   ├── extensions.json           # 專案所需的 extensions
│   └── settings.json             # 專案所需的設定
├── dist                          # 專案編譯後的路徑
├── docker                        # docker 所需相關資料
├── mock                          # mock 資料與 server
├── node_modules                  # 存放安裝的套件
├── projects                      # 存放其他 angular 專案
│   └── common-lib                # 前後台共用函式庫
├── scripts                       # 存放腳本
├── src                           # 原始碼
│   ├── app                       # 主程式資料夾
│   │   ├── core                  # 存放核心模組 (singleton)
│   │   ├── features              # 存放功能模組
│   │   │   └── pages             # 主要開發的功能頁面
│   │   ├── layout                # layout 區分登入與未登入
│   │   ├── shared                # 共用模組 (非 singleton)
│   │   ├── shared-material       # 共用 material 模組
│   │   ├── app-routing.module    # 主要路由設定
│   │   ├── app.component.html    # 根元件 html
│   │   ├── app.component.scss    # 根元件 scss
│   │   ├── app.component.ts      # 根元件 ts
│   │   └── app.module.ts         # 根模組
│   ├── assets                    # 靜態資源
│   ├── environments              # 區分不同環境設定檔
│   ├── styles                    # 存放 scss
│   ├── types                     # 定義 typescript 型別
│   ├── favicon.ico               # 網頁 favicon.ico
│   ├── index.html                # 入口頁面
│   ├── main.ts                   # angular 入口檔案
│   ├── polyfills.ts              # polyfills
├── .browserslistrc               # 瀏覽器兼容性配置
├── .commitlintrc.json            # commit檢查配置
├── .dockerignore                 # docker build 忽略配置
├── .editorconfig                 # 編碼樣式的文件格式配置
├── .eslintrc.js                  # eslint 配置
├── .gitignore                    # git 忽略配置
├── .gitmodules                   # git submodule 配置
├── .prettierignore               # prettier 忽略配置
├── .prettierrc.json              # prettier 配置
├── .versionrc.json               # 自動生成 CHANGELOG.md 配置
├── angular.json                  # angular 配置
├── CHANGELOG.md                  # 專案更新日誌
├── Dockerfile                    # docker build 配置
├── package.json                  # package.json
├── README.md                     # 專案說明
├── server.js                     # mock server
├── tsconfig.app.json             # typescript 配置
├── tsconfig.json                 # typescript 配置
└── tsconfig.spec.json            # typescript 測試配置
```

## Npm 指令

- `npm install` 安裝 json.package 所有套件
- `npm install [package]` 安裝套件
- `npm install [package] --dev` 安裝 dev 套件
- `npm install -g [package]` 安裝在電腦全域中
- `npm uninstall [package]` 移除專案套件

## 啟動專案

1. 安裝專案所需套件(依據 package.josn)
   ```sh
   npm install
   ```
2. 載入 git submodule 子專案(位於 projects/common-lib)
   ```sh
   npm run git_sub_update_init
   ```
3. 啟動開發
   ```sh
   npm start
   ```

## 編譯專案

- development 環境
  ```sh
  npm run build:development
  ```
- production 環境
  ```sh
  npm run build
  ```

## 上版階段

| 上版階段 | 分支    | 編譯環境    |
| -------- | ------- | ----------- |
| DEV      | pre-dev | development |
| SIT      | develop | production  |
| UAT      | release | production  |
| PROD     | master  | production  |

P.S. 上版至 SIT 前必須先執行 `版本發布`

## 版本發布

依據語意話版本 https://semver.org/lang/zh-TW/

主版本號

```sh
npm run release:major
```

次版本號

```sh
npm run release:minor
```

修正版本號

```sh
npm run release:patch
```

## Git Message

採用 https://www.conventionalcommits.org/zh-hant/ 規範
主要有以下 type

- chore: 其他瑣事
- core: 核心
- docs: 文件
- feat: 功能/修改
- fix: 修正
- perf: 優化
- refactor: 重構
- revert: 恢復
- style: 排版樣式
- test: 單元測試

#### 如有牌卡請帶入牌卡編號，並且紀錄牌卡連結

例如:

```
fix: [001] 修正檢核錯誤

https://tpower.atlassian.net/browse/CHUBB2-001
```

## 程式碼排版風格

使用的是 `prettier`, 如需調整可參考專案下 `.prettierrc.json`

## 程式碼檢查

使用的是 `eslint`, 如需調整可參考專案下 `.eslintrc.json`

## Git Message 檢查

使用的是 `commitlint,` 如需調整可參考專案下 `.commitlintrc.json`

## Git Commit 將會觸發以下動作

1. prettier 自動修排版
2. eslint 程式碼檢查
3. commitlint git message 檢查

## 其他 Script

執行方式 `npm run [script-name]`

- `lint` 程式碼檢查
- `lint:only_error` 程式碼檢查只顯示 Error 層級
- `lint:fix` 自動修正(小錯誤)程式碼
- `lint:eslint_current_rule` 顯示當前 eslint 規則
- `lint:eslint_prettier_conflict` 檢查當前 eslint 與 prettier 規則是否有衝突
- `lint:per_rule_performance` 顯示 eslint 規則檢查到錯誤的佔比
- `prettier:check` 顯示需要修正排版的檔案清單
- `prettier:fix` 自動修正排版
- `analyze` 分析編譯後的包大小

## [mock-api] json-server 的啟動流程

1. 啟動 json-server

- 需先安裝 nodemon `npm install -g nodemon`
- 快速執行: `npm run mock`
- 說明: 使用 node server.js 架設 json-server，啟動後的連結為 http://localhost:3000

2. constants/configuration.ts 裡面修改 `location.apiPath` = http://localhost:3000/b2b2c.custPtl

3. 啟動 angular

- 快速執行: `npm run start`
- 說明: 前端串接 mock-api 的環境已經設定在 `environment.jsonserver.ts` 這個檔案，
  經由 angular.json 中的 serve 內建立了 `jsonserver` hook

## TSDoc 註解

- `@param` 描述傳遞給函式的參數
- `@returns` 描述一個函式的返回值
- `@inheritdoc` 標註繼承其父類的文檔
- `@example` 舉例
- `@type` 標註類型
- `@defaultValue` 初始值
- `@readonly` 唯讀
- `@sealed` 內部調用的函式

範例 1 - 函式有回傳值

```typescript
/**
 * 數字相加
 *
 * @param a - 描述參數 a
 * @param b - 描述參數 b
 * @returns 數字總和
 */

function add(a: number, b: number): number {
  return a + b;
}
```

範例 2 - 函式沒有回傳值

```typescript
/**
 * 數字相加
 *
 * @param a - 描述參數 a
 * @param b - 描述參數 b
 * @returns 無回傳值
 */

function add(a: number, b: number): void {
  console.log(a + b);
}
```

範例 3 - 繼承 ControlValueAccessor 的函式

```typescript
class DatepickerYmdSelectComponent implements OnInit, ControlValueAccessor {
  /**
   * {@inheritDoc ControlValueAccessor.writeValue}
   *
   * @param value - 描述
   * @returns 無回傳值
   */
  writeValue(value: string): void {}
}
```

範例 4 - getter and setter

```typescript
export class Book {
  /**
   * 標題
   *
   * @readonly
   */
  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    throw new Error('This property is read-only!');
  }
}
```

範例 5 - Angular 元件 @Input() 和 @Output()

```typescript
export class Book {
  /** Angular 元件 - 父元件更新子元件中的資料 書本標題 */
  @Input() title: string | null = '';

  /**
   * Angular 元件 - 子元件相父元件傳遞資料 取得手機號碼
   *
   * @param $event - 電話號碼
   */
  @Output() getPhone = new EventEmitter<number>();
}
```

## 根目錄資料夾說明

- .husky: git 檢測規範
- .vscode: vs code 設定
- docker: VM 部屬專用
- projects: 前後台共用元件
- scripts: git 版本號設置
