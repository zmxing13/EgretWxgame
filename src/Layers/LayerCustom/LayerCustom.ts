/**
 * 自定义页
*/
class LayerCustom extends BaseContainer{
    private _public:PublicClass = new PublicClass();
    private userInfoHead:CustomTopContentClass;
    private userInfoNickName:CustomNickNameBox;
    private userInfoDoneBtn:CustomDoneBtn;
    private customBoo:boolean=false;

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
        // console.log('自定义');
        this.userInfoHead = new CustomTopContentClass();
        this.addChild(this.userInfoHead);

        this.userInfoNickName = new CustomNickNameBox();
        this.addChild(this.userInfoNickName);

        this.userInfoDoneBtn = new CustomDoneBtn('jump');
        this.addChild(this.userInfoDoneBtn);

	}

	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
     */
	public UpWindowData(){
        let scaX,scaY,tempScale;
        scaX = Main.W/(this.userInfoHead.width*1.5);
		scaY = (this.userInfoHead.height*1.5);
        tempScale =Math.min(scaX,scaY);

        this.userInfoHead.scaleX=this.userInfoHead.scaleY=Math.abs(tempScale);
        this.userInfoHead.x=(Main.W-this.userInfoHead.width)/2+(this.userInfoHead.width/6);
        this.userInfoHead.y=(Main.H-this.userInfoHead.height)/4;
        
        this.userInfoNickName.scaleX=this.userInfoNickName.scaleY=Math.abs(tempScale);
        this.userInfoNickName.x=this.userInfoHead.x;
        this.userInfoNickName.y=this.userInfoHead.y+(this.userInfoNickName.height*8);

        this.userInfoDoneBtn.scaleX=this.userInfoDoneBtn.scaleY=Math.abs(tempScale);
        this.userInfoDoneBtn.x=this.userInfoNickName.x;
        this.userInfoDoneBtn.y=this.userInfoNickName.y+(this.userInfoDoneBtn.height*4);
	}

	/**
     * 初始化事件消息
     */
	private initMessage(){
        this.userInfoDoneBtn.touchEnabled=true;
        this.userInfoDoneBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.userInfoDoneBtnTouch,this)
        this.userInfoNickName.inputTitle.touchEnabled=true;
        this.userInfoNickName.inputTitle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.userInfoNickNameTouch,this)
	}

    private userInfoDoneBtnTouch(e:egret.TouchEvent){
        // this.userInfoDoneBtn.updateBtnState();
        // console.log(this.userInfoNickName.inputTitle.text)
    }

    private userInfoNickNameTouch(e:egret.TouchEvent){
        // this.userInfoNickName.inputTitle.text='';
        // console.log('------------')
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