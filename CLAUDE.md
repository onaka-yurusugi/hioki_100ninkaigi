# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

この日置市100人カイギ（ひおきし100にんかいぎ）プロジェクトは、日置市に関わる面白い活動をしている人々を紹介し、緩やかなコミュニティ形成を目指すNext.jsアプリケーションです。

## Architecture

このプロジェクトはNext.js 14 (App Router) + TypeScriptで構築されています：

- **src/app/**: Next.js App Router構造
  - `layout.tsx`: ルートレイアウト（メタデータ、フォント設定）
  - `page.tsx`: メインページコンポーネント
- **src/components/**: Reactコンポーネント
  - 各セクション用のコンポーネント（HeroSection, IntroSection など）
  - 再利用可能なコンポーネント（GuestCard）
- **src/styles/**: CSSモジュール
  - `globals.css`: グローバルスタイル、CSS変数、リセットCSS
  - `*.module.css`: 各コンポーネント専用のスタイル
- **src/data/**: TypeScript型定義とデータ
  - `guests.ts`: ゲスト情報の型定義と配列データ
- **public/**: 静的アセット（画像ファイル）

## Development Commands

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# リント実行
npm run lint

# TypeScript型チェック
npm run type-check
```

## Key Features

- **App Router**: Next.js 14の最新App Router使用
- **TypeScript**: 型安全性の確保
- **CSS Modules**: コンポーネントスコープのスタイリング
- **Static Export**: 静的サイト生成設定（next.config.js）
- **Image Optimization**: Next.js Imageコンポーネント使用
- **レスポンシブデザイン**: モバイルファーストアプローチ

## Component Structure

- **HeroSection**: 日置市100人カイギのロゴとタイトル
- **IntroSection**: 背景説明と最新情報へのリンク
- **AboutSection**: 100人カイギのコンセプト説明
- **PhilosophySection**: 3つの主要目標（刺激・宣言・応援）
- **FutureSection**: 描きたい未来の説明
- **FlowSection**: イベントの流れ（2部構成）
- **GuestSection**: 過去の登壇者のプロフィールグリッド
- **MemberSection**: 運営チームの紹介
- **Footer**: お問い合わせ情報

## Styling Guidelines

- **CSS変数**: `src/styles/globals.css`の`:root`で定義
- **フォント**: Google Fonts（Noto Sans JP、Noto Serif JP）
- **カラーコード**:
  - プライマリ: #000 (黒)
  - セカンダリ: #fff (白)  
  - アクセント: #ffda74 (黄色)
  - テキスト: #434343 (グレー)
- **CSS Modules**: コンポーネントレベルでスタイルを分離

## Content Management

### ゲストの追加
1. `public/`に新しいゲスト画像を追加
2. `src/data/guests.ts`のguests配列に新しいエントリを追加
3. 必要に応じてGuest型定義を更新

### 新しいセクションの追加
1. `src/components/`に新しいコンポーネントファイルを作成
2. `src/styles/`に対応するCSSモジュールを作成
3. `src/app/page.tsx`にコンポーネントをインポート・配置

## Deployment

静的エクスポート設定により、以下のコマンドで静的ファイルを生成：
```bash
npm run build
```
生成されるファイルは`out/`ディレクトリに出力され、任意の静的ホスティングサービスにデプロイ可能です。