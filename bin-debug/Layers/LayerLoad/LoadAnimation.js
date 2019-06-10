//load加载动画
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
var LoadAnimation = (function (_super) {
    __extends(LoadAnimation, _super);
    function LoadAnimation() {
        var _this = _super.call(this) || this;
        // private data = '../../Prefabs/DataBus.ts';
        _this._public = new PublicClass();
        _this.initSprite();
        _this.UpWindowData();
        _this.initMessage();
        return _this;
    }
    /**
     * 创建图形界面
     */
    LoadAnimation.prototype.initSprite = function () {
        //加载动画内容
        this._animtion = this._public.createBitmapByName('img_loadAnim');
        this.addChild(this._animtion);
        this._textContent = this._public.createBitmapTextByName('跳过');
        this._textContent.alpha = 0;
        this.addChild(this._textContent);
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
     */
    LoadAnimation.prototype.UpWindowData = function () {
        // this._animtion.scaleX = this._animtion.scaleY = Main.scaleNum +.3 ;
        this._animtion.width = Main.W * .8;
        this._animtion.height = Main.H * .8;
        this._animtion.x = (Main.W - this._animtion.width) / 2;
        this._animtion.y = (Main.H - this._animtion.height) / 2;
        this._textContent.x = this._animtion.x + this._animtion.width - this._textContent.width * 1.5;
        this._textContent.y = this._animtion.y + this._textContent.height * 1.5;
    };
    /**
     * 初始化事件消息
     */
    LoadAnimation.prototype.initMessage = function () {
    };
    /**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    LoadAnimation.prototype.DestroyOut = function (exitTime, waitTime) {
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
    LoadAnimation.prototype.Destroy = function () {
        if (this.parent) {
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    };
    return LoadAnimation;
}(BaseContainer));
__reflect(LoadAnimation.prototype, "LoadAnimation");
