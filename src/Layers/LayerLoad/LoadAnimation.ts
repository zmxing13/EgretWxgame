//load加载动画

class LoadAnimation extends BaseContainer{

    // private data = '../../Prefabs/DataBus.ts';

    private _public:PublicClass = new PublicClass();
    private _animtion:egret.Bitmap;
    public _textContent:egret.TextField;
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
        //加载动画内容
        this._animtion = this._public.createBitmapByName('img_loadAnim');
        this.addChild(this._animtion);

        this._textContent = this._public.createBitmapTextByName('跳过');
        this._textContent.alpha=0;
        this.addChild(this._textContent);

	}

	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
     */
	public UpWindowData(){
        // this._animtion.scaleX = this._animtion.scaleY = Main.scaleNum +.3 ;
        this._animtion.width = Main.W *.8;
        this._animtion.height = Main.H *.8;

        this._animtion.x=(Main.W-this._animtion.width)/2;
        this._animtion.y=(Main.H-this._animtion.height)/2;
        
        this._textContent.x=this._animtion.x + this._animtion.width - this._textContent.width *1.5;
        this._textContent.y=this._animtion.y + this._textContent.height *1.5;

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