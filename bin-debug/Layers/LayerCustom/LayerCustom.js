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
 * 自定义页
*/
var LayerCustom = (function (_super) {
    __extends(LayerCustom, _super);
    function LayerCustom() {
        var _this = _super.call(this) || this;
        _this._public = new PublicClass();
        _this.customBoo = false;
        _this.initSprite();
        _this.UpWindowData();
        _this.initMessage();
        return _this;
    }
    /**
     * 创建图形界面
     */
    LayerCustom.prototype.initSprite = function () {
        // console.log('自定义');
        this.userInfoHead = new CustomTopContentClass();
        this.addChild(this.userInfoHead);
        this.userInfoNickName = new CustomNickNameBox();
        this.addChild(this.userInfoNickName);
        this.userInfoDoneBtn = new CustomDoneBtn('jump');
        this.addChild(this.userInfoDoneBtn);
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
     */
    LayerCustom.prototype.UpWindowData = function () {
        var scaX, scaY, tempScale;
        scaX = Main.W / (this.userInfoHead.width * 1.5);
        scaY = (this.userInfoHead.height * 1.5);
        tempScale = Math.min(scaX, scaY);
        this.userInfoHead.scaleX = this.userInfoHead.scaleY = Math.abs(tempScale);
        this.userInfoHead.x = (Main.W - this.userInfoHead.width) / 2 + (this.userInfoHead.width / 6);
        this.userInfoHead.y = (Main.H - this.userInfoHead.height) / 4;
        this.userInfoNickName.scaleX = this.userInfoNickName.scaleY = Math.abs(tempScale);
        this.userInfoNickName.x = this.userInfoHead.x;
        this.userInfoNickName.y = this.userInfoHead.y + (this.userInfoNickName.height * 8);
        this.userInfoDoneBtn.scaleX = this.userInfoDoneBtn.scaleY = Math.abs(tempScale);
        this.userInfoDoneBtn.x = this.userInfoNickName.x;
        this.userInfoDoneBtn.y = this.userInfoNickName.y + (this.userInfoDoneBtn.height * 4);
    };
    /**
     * 初始化事件消息
     */
    LayerCustom.prototype.initMessage = function () {
        this.userInfoDoneBtn.touchEnabled = true;
        this.userInfoDoneBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.userInfoDoneBtnTouch, this);
        this.userInfoNickName.inputTitle.touchEnabled = true;
        this.userInfoNickName.inputTitle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.userInfoNickNameTouch, this);
    };
    LayerCustom.prototype.userInfoDoneBtnTouch = function (e) {
        // this.userInfoDoneBtn.updateBtnState();
        // console.log(this.userInfoNickName.inputTitle.text)
    };
    LayerCustom.prototype.userInfoNickNameTouch = function (e) {
        // this.userInfoNickName.inputTitle.text='';
        // console.log('------------')
    };
    /**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    LayerCustom.prototype.DestroyOut = function (exitTime, waitTime) {
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
    LayerCustom.prototype.Destroy = function () {
        if (this.parent) {
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    };
    return LayerCustom;
}(BaseContainer));
__reflect(LayerCustom.prototype, "LayerCustom");
