/**
 * 自定义页 头像更换区域
 */
class CustomTopContentClass extends BaseContainer {

	private _public:PublicClass = new PublicClass();

	/**
	 * 轮播图总数
	 */
	private wheelImgNum:number=0;
	private wheelNum:number=1;
	private wheelImgArr:Array<egret.Bitmap>;

	private userImg:egret.Bitmap;
	private beforeImg:egret.Bitmap;
	private imgLoader:egret.ImageLoader;

	private leftUnderlyBtn:egret.Bitmap;
	private rightUnderlyBtn:egret.Bitmap;
	

	public constructor() {
		super();
		// this.initSprite();
		this.UpWindowData();
		this.initMessage();
		// this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddTo, this);
	}

	// private onAddTo(event: egret.Event) {

	// }

	/**
     * 创建图形界面
     */
	private initSprite(){
        // console.log('customUpdateHead');
		this.wheelImgArr=[];
		this.wheelImgNum=5;
		let i,obj:egret.Bitmap;

		this.imgLoader = new egret.ImageLoader();
		this.imgLoader.crossOrigin = "anonymous";
		this.imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this ); 
		this.imgLoader.load(DataBus._userAvatar);
		
		this.beforeImg = this._public.createBitmapByName('img_underlyingHead_'+this.wheelNum);
		this.addChild(this.beforeImg);

		this.leftUnderlyBtn = this._public.createBitmapByName('btn_line_gray_Page Prev');
		this.leftUnderlyBtn.alpha=.6;
		this.addChild(this.leftUnderlyBtn);

		this.rightUnderlyBtn = this._public.createBitmapByName('btn_line_gray_Page Next');
		this.rightUnderlyBtn.alpha=.6;
		this.addChild(this.rightUnderlyBtn);

	}

	private imgLoadHandler( evt:egret.Event ):void{
		let loader:egret.ImageLoader = evt.currentTarget;
		let bmd:egret.BitmapData = this.imgLoader.data;
		let texture = new egret.Texture();
		texture.bitmapData = bmd;
		this.userImg = new egret.Bitmap(texture);
		this.addChild(this.userImg);
		this.UpWindowData();
		console.log('runing  1')
	}

	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
	*/
	public UpWindowData(){

		this.userImg.x=this.userImg.y=0;
		console.log('runing  2')
		
		this.leftUnderlyBtn.x=this.userImg.x-(this.leftUnderlyBtn.width);
		this.leftUnderlyBtn.y=this.userImg.y+(this.userImg.height/2)-(this.leftUnderlyBtn.height/2);
		this.rightUnderlyBtn.x=this.userImg.x+(this.userImg.width);
		this.rightUnderlyBtn.y=this.userImg.y+(this.userImg.height/2)-(this.rightUnderlyBtn.height/2);

	}

	/**
     * 初始化事件消息
     */
	private initMessage(){
		this.leftUnderlyBtn.touchEnabled=true;
		this.rightUnderlyBtn.touchEnabled=true;
		this.leftUnderlyBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.leftUnderlyBtnTouch,this)
		this.rightUnderlyBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.rightUnderlyBtnTouch,this)
	}

	private leftUnderlyBtnTouch(e:egret.TouchEvent){
		console.log('leftClicking');
		this.removeChild(this.userImg);
		this.wheelNum--;
		if(this.wheelNum<=0){
			this.wheelNum=1;
		}
		this.userImg = this._public.createBitmapByName('img_underlyingHead_'+this.wheelNum);
		this.addChild(this.userImg);
		this.UpWindowData();
	}

	private rightUnderlyBtnTouch(e:egret.TouchEvent){
		console.log('rightClicking');
		this.removeChild(this.userImg);
		this.wheelNum++;
		if(this.wheelNum>this.wheelImgNum){
			this.wheelNum=this.wheelImgNum;
		}
		this.userImg = this._public.createBitmapByName('img_underlyingHead_'+this.wheelNum);
		this.addChild(this.userImg);
		this.UpWindowData();
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