---
sidebar_position: 5
---

# ステップ4: VercelとGitHubを連携して自動デプロイする

## Vercelとは

**Vercel** は、GitHubと連携するだけで自動デプロイできるホスティングサービスです。  
無料プランでも独自ドメイン（`プロジェクト名.vercel.app`）でサイトを公開できます。

## セットアップ手順

### 1. Vercelアカウントを作成する

1. iPhoneのブラウザで [vercel.com](https://vercel.com) を開く
2. **「Start Deploying」** をタップ
3. **「Continue with GitHub」** でGitHubアカウントでログイン

### 2. リポジトリをインポートする

1. Vercelダッシュボードで **「Add New...」→「Project」** をタップ
2. **「Import Git Repository」** からGitHubリポジトリを選択
3. リポジトリ名の横の **「Import」** をタップ

### 3. ビルド設定を確認する

Docusaurusの場合、Vercelが自動で認識してくれます。

| 設定項目 | 値 |
|----------|-----|
| Framework Preset | Docusaurus |
| Build Command | `npm run build` |
| Output Directory | `build` |

問題なければそのまま **「Deploy」** をタップ。

### 4. デプロイ完了

1〜2分でデプロイが完了します。  
`https://プロジェクト名.vercel.app` でサイトが公開されます。

## 自動デプロイの仕組み

```
iPhoneでCursorに指示
    ↓
Cloud AgentがコードをGitHubにプッシュ
    ↓
Vercelが自動でビルド開始
    ↓
サイトが自動で更新される ✅
```

**一度設定すれば、あとはCursorに指示するだけで自動公開されます。**

:::tip 本番URLを確認する
Vercelダッシュボードの **「Domains」** セクションに本番URLが表示されます。  
`*.vercel.app` のURLを友達にシェアしましょう！
:::
