# ドコソレ流 Next.js AppRouter Settings

- AppRouterを用いたNext.jsの設計を作成中
- これから実施予定
  - graphql-codegenを動かす
  - コンポーネントの切り分け方を考える
  - ディレクトリ構成を考える
  - SchemeからMockサーバーを建ててみる

## 手順

### create-next-app

```bash
npx create-next-app@latest --ts --use-npm {アプリの名前}
```

```
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias? … Yes
✔ What import alias would you like configured? … @/*
```

### Volta の環境を合わせる

- `volta pin node@18`
- `volta pin npm@8`

### インストール

```bash
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import prettier eslint-config-prettier
```

### ファイルのコピー

以下のファイルを全てこのプロジェクトからコピーして、移す

- tsconfig.json
- .eslintrc.json
- .eslintignore
- .prettierrc.json
- .vscode/settings.json
- .vscode/extensions.json

### その他のインストール

```bash
npm i @apollo/client graphql
npm i -D @graphql-codegen/cli @graphql-codegen/typed-document-node @graphql-codegen/typescript @graphql-codegen/typescript-operations
npm i jotai
npm i react-hook-form
npm i dayjs
```

## ディレクトリ構成

- 斉藤が考案中...
- [Next.js公式の説明](https://nextjs.org/docs/app/building-your-application/routing/colocation)

## 備考

### ChakraUIのRSCへの対応予定

- 現時点ではChakraUIはRSCに対応していない
- ChakraUI側は、RSCでChakraUIを使えるようにランタイムCSS-in-JSを取り除こうとしている
- これにはもうしばらく時間がかかりそう（まだ研究段階）
- [参考リンク](https://www.adebayosegun.com/blog/the-future-of-chakra-ui)
