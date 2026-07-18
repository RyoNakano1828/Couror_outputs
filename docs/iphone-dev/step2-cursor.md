---
sidebar_position: 3
---

# ステップ2: CursorでCloud Agentを使って開発する

## Cursorとは

**Cursor** はAIを搭載した開発環境です。  
**Cloud Agent** 機能を使えば、iPhoneのブラウザから指示を出すだけで、AIが自動的にコードを書いてくれます。

## セットアップ

1. iPhoneのSafari（またはChromeなど）で [cursor.com](https://cursor.com) を開く
2. アカウントでログイン（GitHubアカウントでログイン可能）
3. ダッシュボードの **「Cloud Agents」** または **「New Agent」** を選択

## Cloud Agentにリポジトリを接続する

1. **「Connect Repository」** を選択
2. GitHubアカウントを連携して、作成したリポジトリを選ぶ
3. Agentに指示を出す

## 指示の出し方（プロンプト例）

```
Docusaurusを使ったドキュメントサイトを作成してください。
テーマはiPhoneだけで開発する方法のガイドです。
```

```
docs/フォルダに「はじめに」のページを追加してください。
内容は〇〇です。
```

:::tip スマホからの入力のコツ
- 音声入力を活用する（マイクボタン）
- 箇条書きで指示を出すと伝わりやすい
- 「前の指示を続けて」と伝えると文脈を保持してくれる
:::

## AgentがコードをCommit・Pushする

Cloud Agentは指示に従ってコードを書いたあと、自動的に：

1. `git add` でファイルをステージング
2. `git commit` でコミット
3. `git push` でGitHubにプッシュ

してくれます。iPhoneからは何も操作しなくてOKです。
