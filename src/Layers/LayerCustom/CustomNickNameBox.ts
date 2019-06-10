/**
 * 自定义页 昵称输入框
 */
class CustomNickNameBox extends egret.DisplayObjectContainer {
    private _public:PublicClass = new PublicClass();
    // private inputBox:egret.Bitmap;
    private inputBox:egret.Shape;
    public inputTitle:egret.TextField;

	public constructor() {
		super();
		this.initSprite();
		this.UpWindowData();
		this.initMessage();
	}

	/**
     * 创建图形界面
     */
	private initSprite(){
        // console.log('nickName box');
        this.inputBox = new egret.Shape();
        this.inputBox.graphics.beginFill(0xcccccc, 1);
        this.inputBox.graphics.drawRoundRect(0, 0, 200, 100,50,50);
        this.inputBox.graphics.endFill();
        this.addChild(this.inputBox);


        this.inputTitle = new egret.TextField();
        this.inputTitle.type = egret.TextFieldType.INPUT;
        this.inputTitle.fontFamily = 'KaiTi';
        this.inputTitle.textAlign = egret.HorizontalAlign.CENTER;
        this.inputTitle.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.inputTitle.width=this.inputBox.width;
        this.inputTitle.height=this.inputBox.height;
        this.inputTitle.textColor=0x000000;
        // this.inputTitle.text='请输入昵称';
        this.inputTitle.text=DataBus._nickName;
        this.inputTitle.maxChars=10;
        this.addChild(this.inputTitle);

        

	}

	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
     */
	public UpWindowData(){
        
        this.inputBox.x=this.inputBox.y=0;

        this.inputTitle.x=this.inputBox.x;
        this.inputTitle.y=this.inputBox.y;

	}

	/**
     * 初始化事件消息
     */
	private initMessage(){
		
	}


	/**
     * 销毁(淡出)
     * @param exitTime 退出时间
     * @param waitTime 等待时间
     */
    public DestroyOut(exitTime = 0.1, waitTime = 0.1){
        egret.Tween.get(this,{
            onChangeObj: this
        })
        .wait(waitTime*1000)
        .to({ alpha:0 },exitTime*1000)
        .call(this.Destroy,this,[]);
    }
    /**
     * 删除自己
     */
    private Destroy(){
        if(this.parent){
            egret.Tween.removeTweens(this);
            this.parent.removeChild(this);
        }
    }

}