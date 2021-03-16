/**
 * ************都是ELement-UI组件属性，看文档即可****************
 * 属性说明：
 * 属性预计分为三部分：
 * formitem：公共部分（属于form表单的一模一样）
 * 组件自身options：
 * model：数据-v-model
 * rules：规则-检测规则
 *
 * * 组件属性同步的是 element-ui 默认值
 * * 无默认值：对应undefined
 */
export const basicComponents = [
    {
        key: null, // 唯一id
        type: 'input', // 类型
        label: '输入框', // label
        icon: 'el-icon-document-remove', // 图标
        backgroundColor: '#ffffff', // 背景颜色
        issys: 0, // 预设字段（一般是系统默认必填字段，不允许修改样式的那种，即：设置了这个，className就无法设置）
        // item自身专属属性
        options: {
            type: 'text',
            defaultValue: '',
            maxlength: undefined,
            minlength: undefined,
            showWordLimit: false,
            placeholder: undefined,
            clearable: false,
            showPassword: false,
            disabled: false,
            size: undefined,
            prefixIcon: undefined,
            suffixIcon: undefined,
            rows: 2,
            autosize: false,
            autocomplete: 'off',
            name: undefined,
            readonly: false,
            max: undefined,
            min: undefined,
            step: undefined,
            resize: undefined,
            autofocus: false,
            form: undefined,
            label: undefined,
            tabindex: undefined,
            validateEvent: true
        }
    },
    {
        key: null,
        type: 'inputNumber',
        label: '计步器', // label
        icon: 'el-icon-circle-plus-outline',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: 0,
            min: -Infinity,
            max: Infinity,
            step: 1,
            stepStrictly: false,
            precision: undefined,
            size: undefined,
            disabled: false,
            controls: true,
            controlsPosition: undefined,
            name: undefined,
            label: undefined,
            placeholder: undefined
        }
    },
    {
        key: null,
        type: 'autocomplete',
        label: '远程搜索',
        icon: 'el-icon-search',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: '',
            placeholder: undefined,
            disabled: false,
            valueKey: 'value',
            value: undefined,
            debounce: 300,
            placement: 'bottom-start',
            popperClass: undefined,
            triggerOnFocus: true,
            name: undefined,
            selectWhenUnmatched: false,
            label: undefined,
            prefixIcon: undefined,
            suffixIcon: undefined,
            hideLoading: false,
            popperAppendToBody: true,
            highlightFirstTtem: false
        }
    },
    {
        key: null,
        type: 'select',
        label: '选择器',
        icon: 'el-icon-arrow-down',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: '',
            isGroup: false, // 是否分组
            multiple: false,
            disabled: false,
            valueKey: 'value',
            size: '',
            clearable: false,
            collapseTags: false,
            multipleLimit: 0,
            name: undefined,
            autocomplete: 'off',
            placeholder: '请选择',
            filterable: false,
            allowCreate: false,
            remote: false,
            loading: false,
            loadingText: '加载中',
            noMatchText: '无匹配数据',
            noDataText: '无数据',
            popperClass: undefined,
            reserveKeyword: false,
            defaultFirstOption: false,
            popperAppendToBody: true,
            automaticDropdown: false
        }
    },
    {
        key: null,
        type: 'radio',
        label: '单选框',
        icon: 'el-icon-bangzhu',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: '',
            isButton: false, // 按钮样式Button
            disabled: false,
            size: '',
            textColor: '#ffffff',
            fill: '#409EFF',
            // 每个radio属性
            radioList: [
                {
                    label: 'label1',
                    text: 'text1', // text优先级高于label，label后面显示的内容
                    border: false,
                    size: '',
                    name: ''
                }
            ]
        }
    },
    {
        key: null,
        type: 'checkBox',
        label: '多选框',
        icon: 'el-icon-bangzhu',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: [],
            isButton: false, // 按钮样式Button
            size: undefined,
            disabled: false,
            min: undefined,
            max: undefined,
            textColor: '#ffffff',
            fill: '#409EFF',
            // 每个checkBox属性
            boxList: [
                {
                    label: 'label1',
                    text: 'text1', // text优先级高于label，label后面显示的内容
                    trueLabel: undefined,
                    falseLabel: undefined,
                    disabled: false,
                    border: false,
                    size: undefined,
                    name: undefined,
                    checked: false,
                    indeterminate: false
                }
            ]
        }
    },
    {
        key: null,
        type: 'cascader',
        label: '级联选择器',
        icon: '',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: [],
            isPanel: false, // 是否是级联面板
            options: [],
            props: {
                expandTrigger: 'hover',
                multiple: false,
                checkStrictly: false,
                emitPath: true,
                lazy: false,
                lazyLoad: undefined,
                value: 'value',
                label: 'label',
                children: 'children',
                disabled: 'disabled',
                leaf: 'leaf'
            },
            size: '',
            placeholder: '请选择',
            disabled: false,
            clearable: false,
            showAllLevels: true,
            collapseTags: false,
            separator: '/',
            filterable: undefined,
            debounce: 300,
            popperClass: ''
        }
    },
    {
        key: null,
        type: 'switch',
        label: '开关',
        icon: 'el-icon-turn-off',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: '',
            disabled: false,
            width: 40,
            activeIconClass: '',
            inactiveIconClass: '',
            activeText: '',
            inactiveText: '',
            activeValue: true,
            inactiveValue: false,
            activeColor: '#409EFF',
            inactiveColor: '#C0CCDA',
            name: '',
            validateEvent: true
        }
    },
    {
        key: null,
        type: 'slider',
        label: 'slider 开关',
        icon: '',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: 0,
            min: 0,
            max: 100,
            disabled: false,
            step: 1,
            showInput: false,
            showInputControls: true,
            inputSize: 'small',
            showStops: false,
            showTooltip: true,
            range: false,
            vertical: false,
            height: undefined,
            label: undefined,
            debounce: 300,
            tooltipClass: undefined,
            marks: undefined
        }
    },
    {
        key: null,
        type: 'timePicker',
        label: '时间选择器',
        icon: '',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: '',
            isSelect: false,
            // select对应options
            selectOptions: {
                start: '09:00',
                end: '18:00',
                step: '00:30',
                minTime: '00:00',
                maxTime: undefined
            },
            // pick options
            pickerOptions: {
                selectableRange: undefined,
                format: 'HH:mm:ss'
            },
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            size: undefined,
            placeholder: undefined,
            startPlaceholder: undefined,
            endPlaceholder: undefined,
            isRange: false,
            arrowControl: false,
            align: 'left',
            popperClass: undefined,
            rangeSeparator: '-',
            valueFormat: undefined,
            'default-value': undefined,
            name: undefined,
            prefixIcon: 'el-icon-time',
            clearIcon: 'el-icon-circle-close'
        }
    },
    {
        key: null,
        type: 'colorPicker',
        label: '颜色选择器',
        icon: '',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: undefined,
            disabled: false,
            size: undefined,
            showAlpha: false,
            colorFormat: 'hex',
            popperClass: undefined,
            predefine: undefined
        }
    },
    {
        key: null,
        type: 'rate',
        label: 'rate 评分',
        icon: '',
        backgroundColor: '#ffffff',
        issys: 0,
        options: {
            defaultValue: 0,
            max: 5,
            disabled: false,
            allowHalf: false,
            lowThreshold: 2,
            highThreshold: 4,
            colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
            voidColor: '#C6D1DE',
            disabledVoidColor: '#EFF2F7',
            iconClasses: ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
            voidIconClass: 'el-icon-star-off',
            disabledVoidIconClass: 'el-icon-star-on',
            showText: false,
            showScore: false,
            textColor: '#1F2D3D',
            texts: ['极差', '失望', '一般', '满意', '惊喜'],
            scoreTemplate: '{value}'
        }
    }
]