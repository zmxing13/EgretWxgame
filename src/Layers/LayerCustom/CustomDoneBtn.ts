/**
 * 自定义页 完成/跳过按钮
 */
class CustomDoneBtn extends egret.DisplayObjectContainer {
    private _public:PublicClass = new PublicClass();
    private doneBtn:egret.Bitmap;
    private jumpBtn:egret.Bitmap;
    private updateTime:number=0;

	public constructor(str:string) {
		super();
		this.initSprite();
		this.UpWindowData();
		this.initMessage();
	}

	/**
     * 创建图形界面
     */
	private initSprite(){
        // console.log('custom done btn');
        this.updateTime=300;

        this.jumpBtn = this._public.createBitmapByName('img_jumpBtn');
        this.addChild(this.jumpBtn);

        this.doneBtn = this._public.createBitmapByName('img_doneBtn');
        this.addChild(this.doneBtn);
        this.doneBtn.alpha=0;

	}

	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
     */
	public UpWindowData(){

	}

	/**
     * 初始化事件消息
     */
	private initMessage(){
		
	}

    public updateBtnState(){
        egret.Tween.get(this.jumpBtn)
        .to({alpha:0},this.updateTime)
        egret.Tween.get(this.doneBtn)
        .to({alpha:1},this.updateTime)
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