# 🌺 Flower Album Site (Amami Digital Botanical Database)

奄美大島の植物・野草をネオン/Y2Kスタイルのデザインで紹介するデジタル図鑑プロジェクトニダ。

## 🌟 プロジェクト概要
- **デザイン**: Y2K、サイバーパンク、ネオン、グラスモーフィズムを融合させたモダンなインターフェース。
- **技術スタック**: Astro v5, React v19, Tailwind CSS v4.
- **自動化**: 画像ファイルを追加するだけでデータベースを更新するスクリプトを搭載。

## 🚀 開発・運用コマンド

| コマンド | 内容 |
| :--- | :--- |
| `npm run dev` | ローカル開発サーバーを起動 (`localhost:4321`) |
| `npm run build` | 本番用の静的ファイルをビルド |
| `node scripts/update_plants.cjs` | `public/images` 内の画像から `plants.json` を更新 |

## 🛠️ データ更新フロー
1. `public/images` に植物画像を配置するニダ（命名規則: `id_00.jpg`）。
2. `node scripts/update_plants.cjs` を実行して、画像情報をデータベースに反映するニダ。
3. `src/data/plants.json` を開き、必要に応じて説明文や色、開花月を追記するニダ。

## 📁 主要ディレクトリ構成
- `src/pages/`: ページのルーティング（トップ、詳細ページ）。
- `src/components/`: ネオンボタン、ギャラリー、検索リストなどのUIコンポーネント。
- `src/data/`: `plants.json` (植物データ) と `colors.json` (カラー定義)。
- `scripts/`: データ更新用の自動化スクリプト。
- `docs/`: 要件定義書などの開発ドキュメント。
