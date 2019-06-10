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
//发送获取数据库类
var ServerData = (function (_super) {
    __extends(ServerData, _super);
    function ServerData() {
        return _super.call(this) || this;
    }
    return ServerData;
}(egret.DisplayObjectContainer));
__reflect(ServerData.prototype, "ServerData");
