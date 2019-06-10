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
//公共方法类
var PublicClass = (function (_super) {
    __extends(PublicClass, _super);
    function PublicClass() {
        return _super.call(this) || this;
    }
    /**
     * 根据name关键字创建一个Bitmap对象。
     * name属性请参考resources/resource.json配置文件的内容
     */
    PublicClass.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_png');
        result.texture = texture;
        return result;
    };
    /**
     * 根据textStr关键字创建一个TextField对象
     * @textStr:  文字内容
     * @sizeNum:  文字大小 默认30
     * @colorStr: 文字颜色 默认白色
    */
    PublicClass.prototype.createBitmapTextByName = function (textStr, sizeNum, colorStr) {
        if (sizeNum === void 0) { sizeNum = 30; }
        if (colorStr === void 0) { colorStr = 0xffffff; }
        var textContent = new egret.TextField;
        textContent.verticalAlign = egret.VerticalAlign.MIDDLE;
        textContent.textAlign = egret.HorizontalAlign.CENTER;
        textContent.fontFamily = "微软雅黑";
        textContent.textColor = colorStr;
        textContent.text = textStr;
        textContent.size = sizeNum;
        return textContent;
    };
    return PublicClass;
}(egret.DisplayObjectContainer));
__reflect(PublicClass.prototype, "PublicClass");
