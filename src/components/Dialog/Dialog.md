# 封装Dialog弹出框

```html
<Dialog
  v-model="dialogModel.show"
  :title="dialogModel.title"
  :showBtns="dialogModel.showBtns"
  :cancelText="dialogModel.cancelText"
  :cancelFunc="cancelFunc"
  :confirmText="dialogModel.confirmText"
  :confirmFunc="_confirmFunc"
  :isForm="true"
  :formModel="dialogModel.form"
  :formRules="dialogModel.rules"
  inline>
  <!-- 我是自定义title -->
  <div slot="title">{{dialogModel.title}}</div>
  <!-- <div slot="footer">我是自定义底部</div> -->
  <span>我是dialog内容</span>
  <!-- 我是form -->
  <template slot="form">
    <el-form-item label="车牌号" prop="carNumber">
      <el-input v-model="dialogModel.form.carNumber"></el-input>
    </el-form-item>
  </template>
</Dialog>
```

# 知识点

## vm.$slots

[参考网址](https://cn.vuejs.org/v2/api/#vm-slots)

## title

```html
<div slot="title">{{dialogModel.title}}</div>
```

* 动态修改title标题，可以使用slot
* 完全继承slot组件

## footer

* showBtns：是否显示底部button，默认：true-显示
* 可以自定义
* 可以使用默认的

```html
<!-- 自定义footer -->
<div slot="footer">我是自定义底部</div>
<!-- 如果不添加自定义slot，会默认使用组件封装的footer：slot -->
```

## form 模式

* :isForm="true"
* slot添加form

* form 传递参数要求
```js
// 是否是form模式
isForm: {
  type: Boolean,
  default: false
},
// from 数据
formModel: {
  type: Object,
  default: () => {
    return {}
  }
},
// form 规则
formRules: {
  type: Object,
  default: () => {
    return {}
  }
}
```
* form的slot添加

```html
<template slot="form">
  <el-form-item>
    <el-input></el-input>
  </el-form-item>
</template>
```

## form 注意事项

