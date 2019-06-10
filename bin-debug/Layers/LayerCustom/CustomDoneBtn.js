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
 * 自定义页 完成/跳过按钮
 */
var CustomDoneBtn = (function (_super) {
    __extends(CustomDoneBtn, _super);
    function CustomDoneBtn(str) {
        var _this = _super.call(this) || this;
        _this._public = new PublicClass();
        _this.updateTime = 0;
        _this.initSprite();
        _this.UpWindowData();
        _this.initMessage();
        return _this;
    }
    /**
     * 创建图形界面
     */
    CustomDoneBtn.prototype.initSprite = function () {
        // console.log('custom done btn');
        this.updateTime = 300;
        this.jumpBtn = this._public.createBitmapByName('img_jumpBtn');
        this.addChild(this.jumpBtn);
        this.doneBtn = this._public.createBitmapByName('img_doneBtn');
        this.addChild(this.doneBtn);
        this.doneBtn.alpha = 0;
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
     */
    CustomDoneBtn.prototype.UpWindowData = function () {
    };
    /**
     * 初始化事件消息
     */
    CustomDoneBtn.prototype.initMessage = function () {
    };
    CustomDoneBtn.prototype.updateBtnState = function () {
        egret.Tween.get(this.jumpBtn)
            .to({ alpha: 0 }, this.updateTime);
        egret.Tween.get(this.doneBtn)
            .to({ alpha: 1 }, this.updateTime);
    };
    /**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    CustomDoneBtn.prototype.DestroyOut = function (exitTime, waitTime) {
        if (exitTime === void 0) { exitTime = 0.1; }
        if (waitTime === void 0) { waitTime = 0.1; }
        egret.Tween.get(this, {
            onChangeObj: this
        })
            .wait(waitTime * 1000)
            .to({ alpha: 0 }, exitTime * 1000)
            .call(this.Destroy, this, []);
    };
    /**
     * 删除自己
     */
    CustomDoneBtn.prototype.Destroy = function () {
        if (this.parent) {
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    };
    return CustomDoneBtn;
}(egret.DisplayObjectContainer));
__reflect(CustomDoneBtn.prototype, "CustomDoneBtn");
