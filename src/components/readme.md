## 目录

### components
**拖拽预览组件**

* MarkingForm // 构建Form主体
* tool // 工具类
* WidgetForm // 每个组件实现
* GenerateForm // 预览，构建页面

## form

### defaultPageJson

```json
{
  list: [], // 存放item
  config: {
    // 自定义表单类名
    className: 'my-form-class',
    // 行内表单模式
    inline: true,
    // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
    labelPosition: "right",
    // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto
    labelWidth: 120,
    // 表单域标签的后缀
    labelSuffix: '',
    // 是否显示必填字段的标签旁边的红色星号
    hideRequiredAsterisk: false,
    // 是否显示校验错误信息
    showMessage: true,
    // 是否以行内形式展示校验信息
    inlineMessage: false,
    // 是否在输入框中显示校验结果反馈图标
    statusIcon: false,
    // 是否在 rules 属性改变后立即触发一次验证
    validateOnRuleChange: true,
    // 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
    disabled: false,
    // 用于控制该表单内组件的尺寸
    size: 'small'
  }
}
```


**组件判断，包含所有组件**

## Baseitem
* 基础属性，未添加

## attr
* 对应`Form-Item Attributes`属性，属性添加在`el-form-item`上
* 包含：
    * className
    * Prop
    * label
    * label-width
    * required
    * rules：不做
    * error
    * show-message
    * inline-message
    * size

## options

* 组件属性，熟悉添加在各个组件上
* 每个组件都不一样


## model 数据绑定

## setting

* 调用组件的时候，提供setting即可
```js
// 调用者提供setting
provide: function () {
  return {
    setting: this.setting
  }
},
data () {
  return {
    setting: {
      // 设置
      events: {},
      // 是否显示
      refDisplay: {},
      // 想法允许编辑
      refDisabled: {}
    }
  }
}
```

### provider / inject

* 简单的来说就是在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量
* 需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据

* https://cn.vuejs.org/v2/api/#provide-inject

```js
provide: function() {
  return {
    setting:{}
  }
},
inject: {
  setting: {
    from: "setting",
    default: {}
  }
}
```

## 添加事件

## 是否显示

## disabled

## Element-ui 使用技巧

### 在element-UI 组件的事件中传递自定义参数

```js
@change="((val)=>{changeStatus(val, index)})"
```

## 技术更新计划

**第一版本摸着石头过河，没有过度封装，等完成一个阶段后重构封装**

### v-bind

* v-bind 不应该一个属性一个属性的写，应该v-bind="构建出来的attr即可"
* 设计技术：
  * 所有属性列举出来
  * 中划线属性转化带代码证的驼峰识别
```js
let str = 'ab-cd'
let nameCamel = str.replace(/-(\w)/g,function($0,$1) {
  return $1.toUpperCase()
})
console.log(nameCamel()) // abCd
v-bind="attrs"
attrs: data.options 属性生成的，一个方法即可
```

### rules

* 第一版本没有做rules优化，后续版本添加rules
