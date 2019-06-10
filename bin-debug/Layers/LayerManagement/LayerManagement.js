var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 *文件管理 /控制器
*/
var LayerManagement = (function (_super) {
    __extends(LayerManagement, _super);
    function LayerManagement() {
        var _this = _super.call(this) || this;
        _this.createGameScene();
        _this.UpWindowData();
        return _this;
    }
    /**
     * 初始化事件消息
     */
    LayerManagement.prototype.createGameScene = function () {
        this.openClass = new LayerOpenClass();
        this.addChild(this.openClass);
        this.openClass.addEventListener(EventEnumerate.SELECT_COMPLETE, this.customDispathEvent, this);
    };
    LayerManagement.prototype.customDispathEvent = function (e) {
        if (e.data) {
            this.openClass.DestroyOut(.1);
            this.customClass = new LayerCustom();
            this.addChild(this.customClass);
        }
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
     */
    LayerManagement.prototype.UpWindowData = function () {
    };
    return LayerManagement;
}(BaseContainer));
__reflect(LayerManagement.prototype, "LayerManagement");
