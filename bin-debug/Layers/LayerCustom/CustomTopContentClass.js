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
 * 自定义页 头像更换区域
 */
var CustomTopContentClass = (function (_super) {
    __extends(CustomTopContentClass, _super);
    function CustomTopContentClass() {
        var _this = _super.call(this) || this;
        _this._public = new PublicClass();
        /**
         * 轮播图总数
         */
        _this.wheelImgNum = 0;
        _this.wheelNum = 1;
        // this.initSprite();
        _this.UpWindowData();
        _this.initMessage();
        return _this;
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddTo, this);
    }
    // private onAddTo(event: egret.Event) {
    // }
    /**
     * 创建图形界面
     */
    CustomTopContentClass.prototype.initSprite = function () {
        // console.log('customUpdateHead');
        this.wheelImgArr = [];
        this.wheelImgNum = 5;
        var i, obj;
        this.imgLoader = new egret.ImageLoader();
        this.imgLoader.crossOrigin = "anonymous";
        this.imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        this.imgLoader.load(DataBus._userAvatar);
        this.beforeImg = this._public.createBitmapByName('img_underlyingHead_' + this.wheelNum);
        this.addChild(this.beforeImg);
        this.leftUnderlyBtn = this._public.createBitmapByName('btn_line_gray_Page Prev');
        this.leftUnderlyBtn.alpha = .6;
        this.addChild(this.leftUnderlyBtn);
        this.rightUnderlyBtn = this._public.createBitmapByName('btn_line_gray_Page Next');
        this.rightUnderlyBtn.alpha = .6;
        this.addChild(this.rightUnderlyBtn);
    };
    CustomTopContentClass.prototype.imgLoadHandler = function (evt) {
        var loader = evt.currentTarget;
        var bmd = this.imgLoader.data;
        var texture = new egret.Texture();
        texture.bitmapData = bmd;
        this.userImg = new egret.Bitmap(texture);
        this.addChild(this.userImg);
        this.UpWindowData();
        console.log('runing  1');
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
    */
    CustomTopContentClass.prototype.UpWindowData = function () {
        this.userImg.x = this.userImg.y = 0;
        console.log('runing  2');
        this.leftUnderlyBtn.x = this.userImg.x - (this.leftUnderlyBtn.width);
        this.leftUnderlyBtn.y = this.userImg.y + (this.userImg.height / 2) - (this.leftUnderlyBtn.height / 2);
        this.rightUnderlyBtn.x = this.userImg.x + (this.userImg.width);
        this.rightUnderlyBtn.y = this.userImg.y + (this.userImg.height / 2) - (this.rightUnderlyBtn.height / 2);
    };
    /**
     * 初始化事件消息
     */
    CustomTopContentClass.prototype.initMessage = function () {
        this.leftUnderlyBtn.touchEnabled = true;
        this.rightUnderlyBtn.touchEnabled = true;
        this.leftUnderlyBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.leftUnderlyBtnTouch, this);
        this.rightUnderlyBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rightUnderlyBtnTouch, this);
    };
    CustomTopContentClass.prototype.leftUnderlyBtnTouch = function (e) {
        console.log('leftClicking');
        this.removeChild(this.userImg);
        this.wheelNum--;
        if (this.wheelNum <= 0) {
            this.wheelNum = 1;
        }
        this.userImg = this._public.createBitmapByName('img_underlyingHead_' + this.wheelNum);
        this.addChild(this.userImg);
        this.UpWindowData();
    };
    CustomTopContentClass.prototype.rightUnderlyBtnTouch = function (e) {
        console.log('rightClicking');
        this.removeChild(this.userImg);
        this.wheelNum++;
        if (this.wheelNum > this.wheelImgNum) {
            this.wheelNum = this.wheelImgNum;
        }
        this.userImg = this._public.createBitmapByName('img_underlyingHead_' + this.wheelNum);
        this.addChild(this.userImg);
        this.UpWindowData();
    };
    /**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    CustomTopContentClass.prototype.DestroyOut = function (exitTime, waitTime) {
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
    CustomTopContentClass.prototype.Destroy = function () {
        if (this.parent) {
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    };
    return CustomTopContentClass;
}(BaseContainer));
__reflect(CustomTopContentClass.prototype, "CustomTopContentClass");
