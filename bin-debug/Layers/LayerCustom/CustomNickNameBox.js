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
 * 自定义页 昵称输入框
 */
var CustomNickNameBox = (function (_super) {
    __extends(CustomNickNameBox, _super);
    function CustomNickNameBox() {
        var _this = _super.call(this) || this;
        _this._public = new PublicClass();
        _this.initSprite();
        _this.UpWindowData();
        _this.initMessage();
        return _this;
    }
    /**
     * 创建图形界面
     */
    CustomNickNameBox.prototype.initSprite = function () {
        // console.log('nickName box');
        this.inputBox = new egret.Shape();
        this.inputBox.graphics.beginFill(0xcccccc, 1);
        this.inputBox.graphics.drawRoundRect(0, 0, 200, 100, 50, 50);
        this.inputBox.graphics.endFill();
        this.addChild(this.inputBox);
        this.inputTitle = new egret.TextField();
        this.inputTitle.type = egret.TextFieldType.INPUT;
        this.inputTitle.fontFamily = 'KaiTi';
        this.inputTitle.textAlign = egret.HorizontalAlign.CENTER;
        this.inputTitle.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.inputTitle.width = this.inputBox.width;
        this.inputTitle.height = this.inputBox.height;
        this.inputTitle.textColor = 0x000000;
        // this.inputTitle.text='请输入昵称';
        this.inputTitle.text = DataBus._nickName;
        this.inputTitle.maxChars = 10;
        this.addChild(this.inputTitle);
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
     */
    CustomNickNameBox.prototype.UpWindowData = function () {
        this.inputBox.x = this.inputBox.y = 0;
        this.inputTitle.x = this.inputBox.x;
        this.inputTitle.y = this.inputBox.y;
    };
    /**
     * 初始化事件消息
     */
    CustomNickNameBox.prototype.initMessage = function () {
    };
    /**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    CustomNickNameBox.prototype.DestroyOut = function (exitTime, waitTime) {
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
    CustomNickNameBox.prototype.Destroy = function () {
        if (this.parent) {
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    };
    return CustomNickNameBox;
}(egret.DisplayObjectContainer));
__reflect(CustomNickNameBox.prototype, "CustomNickNameBox");
