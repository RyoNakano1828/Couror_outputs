---
sidebar_position: 1
---

# iPhoneだけで開発する方法

PC不要。iPhoneとインターネット環境だけで、コードを書いて本番にデプロイできます。

## 全体の流れ

```
iPhone
  │
  ├─ 1. GitHubアプリ → リポジトリ作成
  │
  ├─ 2. Cursor (Cloud Agent) → コード開発・編集
  │
  ├─ 3. プッシュ → GitHubに反映
  │
  └─ 4. Vercel → 自動デプロイ（プッシュするだけ）
```

## 必要なもの

| ツール | 用途 | 料金 |
|--------|------|------|
| [GitHub](https://github.com) | コードの保管・バージョン管理 | 無料 |
| [Cursor](https://cursor.com) | AI搭載の開発環境 | 無料プランあり |
| [Vercel](https://vercel.com) | ホスティング・自動デプロイ | 無料プランあり |

## 次のステップ

1. [ステップ1: GitHubでリポジトリを作成する](/docs/iphone-dev/step1-github)
2. [ステップ2: CursorでCloud Agentを使って開発する](/docs/iphone-dev/step2-cursor)
3. [ステップ3: コードをプッシュする](/docs/iphone-dev/step3-push)
4. [ステップ4: VercelとGitHubを連携して自動デプロイする](/docs/iphone-dev/step4-vercel)
