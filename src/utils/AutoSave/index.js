import {debounce} from 'lodash';

/**
 * 1. 自动保存防抖
 * 2. 离开浏览器 | 刷新浏览器 - 选择取消时保存
 * 3. 组件卸载时保存
 */

// 参数
{
    // wait: 3000,         // 防抖时间
    // onSave: () => {}      // 每次调用 的 方法
    // onBeforeSave:() => {} // 每次保存之前调用
}

// 返回值
/**
 * return 
 *  savs.debouncedSave 供 数据改变之后调用
//  *                  直接调用
 *  onSave.exit          退出销毁
 * 
 */

class AutoSave {
    constructor(props) {
        Object.assign(this.opts, props);
    }
    opts = {
              // 默认参数
              wait: 2000,    // default 防抖时间
              onSave: null,           // 自动保存事件 传递过来
              onBeforeSave: null,     // 调用_save保存之前调用 return false 取消 保存
              saveMessage: '确定要离开吗？',
              leading: false,
              maxWait: 1,
              trailing: 1,
    }
    /**
     *  true > 可以绑定定时间  
     *  || 为了不重复绑定事件
     *  || 数据改变的识别 
     */
    saved = true; 
    _save () {      // 统一处理保存事
        if(this.saved || !this.opts.onSave) {
            return ;
        }
        if(this.opts.onBeforeSave && !this.opts.onBeforeSave() === false) {
            return ;
        }
        this.opts.onSave();
        this.removeBeforunload();

    }

    // 私有防抖的_save
    _debouncedSave = debounce(this._save, this.opts.wait || 200, {}, {
        
    });
    
    // 暴露的 onSave 调用方法
    debouncedSave  = () => {
        this.saved && this.addBeforunload();
        return this._debouncedSave();
    }

    /**
     * window.unload | exit
     *  1. Beforeunload 处理
     *  2. 组件销毁时：路由切换页面时
     *  */
    addBeforunload () {
        if(typeof window === undefined) {return ;}
        // 绑定事件
        _Utils_.addEvent(window, 'beforeunload',this.saveBeforeClosing);
        this.saved = false;
    }

    removeBeforunload() {
        if(typeof window === undefined) {return ;}
        _Utils_.removeEvent(window, 'beforeunload', this.saveBeforeClosing);
        this.saved = true;
    }

    saveBeforeClosing = (e) => {
        // todo this._save(); 问题 -> 不管点取消 确认都会执行 ->没给用户选择的机会 问题
        this._save && setTimeout(this._save, 0); // 关闭选择取消时保存
        var confirmationMessage = this.opts.saveMessage;
  
        return (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
        // return                                 // Webkit, Safari, Chrome etc.
    }
    /**
     * 组件销毁 点击路由切换时调用
     * 直接调用保存
     *  */
    exit() {
        if(this.saved) {
            // 未绑定 beforeunload 数据没发生变化
            return ;
        }
        this._save();
    }
}


export default function autoSaveWrap (props) {
    return new AutoSave(props);
}
// window.addEventListener('beforeunload', (e) => {
//     return e.returnValue = '11111111'
// })

const _Utils_ = {
    addEvent: function(element, type, callback){
                if(element.addEventListener){
                    element.addEventListener(type, callback, false);
                }
                else if(element.attachEvent){
                    element.attachEvent('on' + type, callback);
                }
                else {
                    element['on' + type] = callback;
                }
        },
    removeEvent: function(element, type, callback){
            if(element.removeEventListener){
                element.removeEventListener(type, callback, false);
            }
            else if(element.detachEvent){
                element.detachEvent('on' + type, callback);
            }
            else {
                element['on' + type] = null;
            }
        },
    isFunc: function (func) {
        typeof func === 'function';
    }
};

// todo
/**
 * 
 * 1. debounce 提供的方法 暴露
 * 2. 直接保存的方法
 * 3. mobx autoSave
 * 问题: 
 * debounce触发时在获取的数据 不一定是本次的数据
 * 
 {
     function () {
         var data  = this.getData()
         this.debouncedSave()
     }
 }
 */