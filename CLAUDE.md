# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

この日置市100人カイギ（ひおきし100にんかいぎ）プロジェクトは、日置市に関わる面白い活動をしている人々を紹介し、緩やかなコミュニティ形成を目指す静的ウェブサイトです。

## Architecture

このプロジェクトは純粋なHTML/CSSの静的サイトです：

- **web/index.html**: メインのHTMLファイル - サイトの全コンテンツが含まれています
- **web/css/style.css**: CSSスタイルシート - レスポンシブデザインとビジュアルスタイリング
- **web/images/**: 画像アセット - ゲストプロフィール写真、ロゴ、背景画像など

## Key Features

- **ヒーローセクション**: 日置市100人カイギのロゴとタイトル
- **イントロセクション**: 背景説明と最新情報へのリンク
- **100人カイギについて**: コンセプトの説明
- **目指す場のあり方**: 3つの主要目標（刺激・宣言・応援）
- **ゲスト100セクション**: 過去の登壇者のプロフィールグリッド
- **イベントの流れ**: 2部構成の説明
- **メンバーセクション**: 運営チームの紹介
- **フッター**: お問い合わせ情報

## Development Commands

このプロジェクトはNode.js環境を使用していないため、特別なビルドコマンドは必要ありません。

### ローカル開発
```bash
# Pythonの簡易サーバーを使用
python -m http.server 8000 -d web

# または、任意のHTTPサーバーツールを使用
# 例: Live Server VS Code拡張機能
```

### デプロイ
web/フォルダの内容を静的ホスティングサービス（Netlify、Vercel、GitHub Pagesなど）にアップロードします。

## Styling Guidelines

- **CSS変数**: `:root`で定義されたカラーパレットを使用
- **フォント**: Noto Sans JP（本文）、Noto Serif JP（見出し）
- **レスポンシブ**: モバイルファーストアプローチ
- **カラーコード**:
  - プライマリ: #000 (黒)
  - セカンダリ: #fff (白)  
  - アクセント: #ffda74 (黄色)
  - テキスト: #434343 (グレー)

## Image Management

画像は`web/images/`ディレクトリに格納されており、命名規則に従っています：
- ゲスト写真: 数字ベース（_10.png, _11.png など）
- メンバー写真: image-XX.png形式
- 背景画像: 説明的な名前

## Content Updates

### ゲストの追加
1. `web/images/`に新しいゲスト画像を追加
2. `web/index.html`のguest-gridセクションに新しいguest-cardを追加
3. ゲスト番号とプロフィール説明を更新

### スタイルの変更
`web/css/style.css`のCSS変数を編集してカラーパレットを変更するか、既存のクラスを修正してレイアウトを調整します。