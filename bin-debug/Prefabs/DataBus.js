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
//数据池
var DataBus = (function (_super) {
    __extends(DataBus, _super);
    function DataBus() {
        return _super.call(this) || this;
    }
    //code
    DataBus._userCode = '';
    //token
    DataBus._token = '';
    //头像
    DataBus._userAvatar = '';
    //昵称
    DataBus._nickName = '';
    //经验值/总积分
    DataBus._empiricalValue = 0;
    //积分
    DataBus._integral = 0;
    //疲劳值
    DataBus._tired = 0;
    return DataBus;
}(egret.DisplayObjectContainer));
__reflect(DataBus.prototype, "DataBus");
