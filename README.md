# Form-App built with SvelteKit and Prisma

SvelteKit と Prisma でフォームを作成しました。
CSS は Tailwind CSS を使用しました。

## About this app

- 取り掛かろうとしたタイミングで SvelteKit の 1.0 が出たので、それを使用してみました。
- Prisma は正直必要ないですが、配布時に DB の差分を吸収するために使用しています。
- お問い合わせ一覧は開発の都合で作ったページですが、一応残してあります。
- 星のカービィというゲームにハマっているため、影響された配色になってしまいました。

## How to deploy

### Clone

```bash
git clone https://github.com/Suzushiro-radish/sveltekit-prisma-form.git
cd sveltekit-prisma-form
npm install
```

### Setting database

Docker で PostgreSQL を使う場合は

```bash
docker-compose up -d
```

自前の DB を使う場合は.env ファイルの内容を Prisma の公式ドキュメント(https://www.prisma.io/docs/concepts/database-connectors)に従って設定してください。
(.env ファイルも push してあるので、そのままで問題ないです。)

> docker-compose.yml ではマウントの設定はしてありません。

### Create table

Prisma を使用して Migration を行います。

```bash
npx prisma migrate dev
```

### Develop

以下のどちらかのコマンドを実行

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

port:5173 でアプリが立ち上がります。
