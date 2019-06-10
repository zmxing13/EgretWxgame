//公共方法类
class PublicClass extends egret.DisplayObjectContainer{
	public constructor() {
		super();		
	}
    /**
     * 根据name关键字创建一个Bitmap对象。
     * name属性请参考resources/resource.json配置文件的内容
     */
    public createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name + '_png');
        result.texture = texture;
        return result;
    }
    /**
     * 根据textStr关键字创建一个TextField对象
     * @textStr:  文字内容
     * @sizeNum:  文字大小 默认30
     * @colorStr: 文字颜色 默认白色
    */
    public createBitmapTextByName(textStr:string, sizeNum:number=30, colorStr=0xffffff): egret.TextField{
        let textContent:egret.TextField = new egret.TextField;
        textContent.verticalAlign=egret.VerticalAlign.MIDDLE;
        textContent.textAlign=egret.HorizontalAlign.CENTER;
		textContent.fontFamily = "微软雅黑";
        textContent.textColor= colorStr;
        textContent.text=textStr;
        textContent.size=sizeNum;
        return textContent;
    }
    
}