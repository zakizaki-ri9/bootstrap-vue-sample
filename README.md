# bootstrap-vue-sample

`bootstrap-vue`の機能を試すためのリポジトリ

# メモ

## `bootstrap-vue`のインストール手順

yarnの場合のみとりあえず記載。
（リファレンスから抜粋）

### 1.bootstrap-vue追加

```bash
yarn add bootstrap-vue
```

### 2.main.jsへ以下追記

```js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

Vue.use(BootstrapVue)
```

### ex.試しにbootstrap-vueを利用したVueComponentを作成＆表示

- `src/components/BootStrapSample.vue`を追加
- `src/App.vue`へ`BootStrapSample`のコンポーネントを追加

## 使い方

`yarn.lock`があるので、`git pull`後に以下実行でおk。

``` bash
yarn
yarn run dev
```

## 参考URL

- https://bootstrap-vue.js.org/docs/
- https://kagasu.hatenablog.com/entry/2017/07/24/083551
