/**
 * open页
 */
class LayerOpenClass extends BaseContainer{
    private _public:PublicClass = new PublicClass();
    private gameName:egret.Bitmap;
    private gameContent:egret.Bitmap;
    private gameBtn:egret.Bitmap;
    private gameSignature:egret.Bitmap;

    private userInfo;

	public constructor() {
		super();
        this.initValidation()
		this.initSprite();
		this.UpWindowData();
		this.initMessage();
	}

    /**
     * 验证用户信息，拉取用户内容
     */
    private initValidation(){
        /**
         * 1. 是否首次登陆
         * 2. 获取用户信息
         * 3. 存在进入世界地图页
         * 4. 不存在进入用户自定义页
        */
    }

	/**
     * 创建图形界面
     */
	private initSprite(){
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
	}

	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
     */
	public UpWindowData(){

        let scaX,scaY,tempScale;
        scaX = Main.W/(this.gameName.width*.05);
		scaY = (this.gameName.height*.05);
        tempScale = Math.min(scaX,scaY);
        
        // this.gameName.scaleX=this.gameName.scaleY=Math.abs(tempScale);
        this.gameName.x=(Main.W-this.gameName.width)/2;
        this.gameName.y=Main.H*.1;

        // this.gameContent.scaleX=this.gameContent.scaleY=Math.abs(tempScale);
        this.gameContent.x=(Main.W-this.gameContent.width)/2;
        this.gameContent.y=(Main.H-this.gameContent.height)/2;

        // this.gameBtn.scaleX=this.gameBtn.scaleY=Math.abs(tempScale);
        this.gameBtn.x=(Main.W-this.gameBtn.width)/2;
        this.gameBtn.y=this.gameContent.y+this.gameContent.height*1.3;

        // this.gameSignature.scaleX=this.gameSignature.scaleY=Math.abs(tempScale);        
        this.gameSignature.x=(Main.W-this.gameSignature.width)/2;
        this.gameSignature.y=Main.H-this.gameSignature.height*2;
	}

	/**
     * 初始化事件消息
     */
	private initMessage(){
		this.gameBtn.touchEnabled=true;
		this.gameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.gameBtnDown,this);
        this.getuerinfo();  
    }

     //获取用户信息
    private async getuerinfo() {
        // let platform:any=window.platform;
        this.userInfo = await platform.getUserInfo();
        DataBus._nickName=JSON.parse(this.userInfo.rawData).nickName;
        DataBus._userAvatar=JSON.parse(this.userInfo.rawData).avatarUrl;
    }

    /**
     *  检查用户是否首次登陆
     *  存在进入世界地图页
     *  不存在进入用户自定义页
     */
    private gameBtnDown(e:egret.TouchEvent){
        this.dispatchEvent(new EventManage(EventEnumerate.SELECT_COMPLETE,true));
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