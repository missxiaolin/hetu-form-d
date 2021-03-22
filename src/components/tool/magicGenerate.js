import { deepClone, guid, createHash } from './tool'

/**
 * 拖拽控件方法
 * @param {*} item 元素
 * @param {*} isClone 是否是克隆
 */
export function addDraggerWidget(item, isClone) {
    // 最终返回的构建完毕的item
    let returnItem = null

    // item：默认列表中元素所有属性
    let copyItem = deepClone(item)
    // 取出type
    let copyItemType = copyItem.type

    // 获取唯一key
    let key = guid()

    // hash
    let modelname = createHash()

    // 如果是克隆，key添加空字符串，覆盖原来的null
    if (isClone) {
        copyItem.key = ''
    }
    if (copyItem.key) {
        returnItem = copyItem
    } else {
        // 初始化进来是这个
        returnItem = {
            ...copyItem,
            key,
            model: copyItemType + '_' + modelname,
            rules: []
        }
        // 所有formItem 统一添加属性-attr
        returnItem.attr = {
            className: '', // 自定义类名
            prop: '', // prop  预计优化
            label: copyItem.label, // 文本
            labelWidth: 120, // 单个表单域标签宽度
            required: false, // 是否必选
            rules: {}, // 表单验证规则
            error: '', // 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
            showMessage: true, // 是否显示校验错误信息
            inlineMessage: false, // 以行内形式展示校验信息
            size: {} // 用于控制该表单域下组件的尺寸
        }
    }
    // 栅格-删除model、rules和attr属性
    if (copyItemType === 'grid') {
        delete returnItem.model
        delete returnItem.rules
        delete returnItem.attr
    }
    return returnItem
}

let formModels = {}
let formRules = {}
/**
 * 通过JSON获得model
 */
export function getModelByJson(data) {
    if (data && data.list) {
        // 构建model
        formatModel(data.list)
        let models = formModels
        let rules = formRules
        return {
            models,
            rules
        }
    }
}
// 处理model
function formatModel(list) {
    list.forEach(item => {
        if (item && item.type) {
            let type = item.type
            if (type === 'grid') {
                // gird 处理
            } else {
                // 其余情况处理
                getFormItemJson(item)
            }
        }
    })
}
// 根据item类型，获取model
// model：基本就是id，组件标识，非常重要，字符串格式
function getFormItemJson(item) {
    let modelName = item.model
    let value = (item.options || {}).defaultValue || ''
    formModels[modelName] = value
}
