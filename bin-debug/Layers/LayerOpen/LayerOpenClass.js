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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * open页
 */
var LayerOpenClass = (function (_super) {
    __extends(LayerOpenClass, _super);
    function LayerOpenClass() {
        var _this = _super.call(this) || this;
        _this._public = new PublicClass();
        _this.initValidation();
        _this.initSprite();
        _this.UpWindowData();
        _this.initMessage();
        return _this;
    }
    /**
     * 验证用户信息，拉取用户内容
     */
    LayerOpenClass.prototype.initValidation = function () {
        /**
         * 1. 是否首次登陆
         * 2. 获取用户信息
         * 3. 存在进入世界地图页
         * 4. 不存在进入用户自定义页
        */
    };
    /**
     * 创建图形界面
     */
    LayerOpenClass.prototype.initSprite = function () {
        // console.log(DataBus.userAvatar)
        this.gameName = this._public.createBitmapByName('gameName');
        this.addChild(this.gameName);
        this.gameContent = this._public.createBitmapByName('gameContent');
        this.addChild(this.gameContent);
        this.gameBtn = this._public.createBitmapByName('gameBtn');
        this.addChild(this.gameBtn);
        this.gameSignature = this._public.createBitmapByName('gameSignature');
        this.addChild(this.gameSignature);
        // this.userInfo = platform.getUserInfo();
    };
    /**
     * 界面布局 (尺寸发生变化时会执行)
     * 【初始化时需要 图形创建后执行一次】
     */
    LayerOpenClass.prototype.UpWindowData = function () {
        var scaX, scaY, tempScale;
        scaX = Main.W / (this.gameName.width * .05);
        scaY = (this.gameName.height * .05);
        tempScale = Math.min(scaX, scaY);
        // this.gameName.scaleX=this.gameName.scaleY=Math.abs(tempScale);
        this.gameName.x = (Main.W - this.gameName.width) / 2;
        this.gameName.y = Main.H * .1;
        // this.gameContent.scaleX=this.gameContent.scaleY=Math.abs(tempScale);
        this.gameContent.x = (Main.W - this.gameContent.width) / 2;
        this.gameContent.y = (Main.H - this.gameContent.height) / 2;
        // this.gameBtn.scaleX=this.gameBtn.scaleY=Math.abs(tempScale);
        this.gameBtn.x = (Main.W - this.gameBtn.width) / 2;
        this.gameBtn.y = this.gameContent.y + this.gameContent.height * 1.3;
        // this.gameSignature.scaleX=this.gameSignature.scaleY=Math.abs(tempScale);        
        this.gameSignature.x = (Main.W - this.gameSignature.width) / 2;
        this.gameSignature.y = Main.H - this.gameSignature.height * 2;
    };
    /**
     * 初始化事件消息
     */
    LayerOpenClass.prototype.initMessage = function () {
        this.gameBtn.touchEnabled = true;
        this.gameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.gameBtnDown, this);
        this.getuerinfo();
    };
    //获取用户信息
    LayerOpenClass.prototype.getuerinfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // let platform:any=window.platform;
                        _a = this;
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 1:
                        // let platform:any=window.platform;
                        _a.userInfo = _b.sent();
                        DataBus._nickName = JSON.parse(this.userInfo.rawData).nickName;
                        DataBus._userAvatar = JSON.parse(this.userInfo.rawData).avatarUrl;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  检查用户是否首次登陆
     *  存在进入世界地图页
     *  不存在进入用户自定义页
     */
    LayerOpenClass.prototype.gameBtnDown = function (e) {
        this.dispatchEvent(new EventManage(EventEnumerate.SELECT_COMPLETE, true));
    };
    /**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    LayerOpenClass.prototype.DestroyOut = function (exitTime, waitTime) {
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
    LayerOpenClass.prototype.Destroy = function () {
        if (this.parent) {
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    };
    return LayerOpenClass;
}(BaseContainer));
__reflect(LayerOpenClass.prototype, "LayerOpenClass");
