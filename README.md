# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Use git branch standard

Use gitflow branch standard, see under:

👉 分支类型

| 分支类型 | 分支名称匹配规则 | 描述 |
| -------- | -------- | -------- |
| 主干分支 | master/main | 仓库中的默认分支，比如Github新建一个Project，默认生成的就是master分支 |
| 开发分支 | develop | 平时开发用的主分支，永远是功能最全最新 |
| 功能分支 | feature/* | 一般一个完整的功能模块对应一个功能分支 |
| 发布分支 | release/* | 一般一次新版本的发布对应一个发布分支 |
| 热修复分支 | hotfix/* | 从主干分支拉出，用于线上版本的Bug修复 |

👉 合并方向

规范仓库分支间的合并方向，只允许创建列表中规定方向的合并请求

| 源分支 | 目标分支 | 描述 |
| -------- | -------- | -------- |
| 发布分支 | 主干分支 | release/* -> <主干分支> |
| 热修复分支 | 主干分支 | hotfix/* -> <主干分支> |
| 功能分支 | 开发分支 | feature/* -> <开发分支> |
| 发布分支 | 开发分支 | release/* -> <开发分支> |
| 热修复分支 | 开发分支 | hotfix/* -> <开发分支> |
