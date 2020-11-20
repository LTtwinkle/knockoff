# 配置

Umi 在 `.umirc.ts` 或 `config/config.ts` 中配置项目和插件，支持 es6。一份常见的配置如下，

```bash
export default {
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
}
```

## 配置文件

如果项目的配置不复杂，推荐在 `.umirc.ts` 中写配置； 如果项目的配置比较复杂，可以将配置写在 `config/config.ts` 中，并把配置的一部分拆出去，比如路由配置可以拆成单独的 `config/routes.ts`。

两种方式二选一，`.umirc.ts` 优先级更高。

## TypeScript 提示

如果你想在写配置时也有提示，可以通过 umi 的 `defineConfig` 方法定义配置，

```js
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
```

