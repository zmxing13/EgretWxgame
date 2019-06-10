//////////////////////////////////////////////////////////////////////////////////////
//
//  ProjectMould
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {
    /**
     * 设备
     */
    public static os:string="";

    /**
     * 平台
     */
    public static runtimeType:string="";

    /**
     * 缩放比例
     */
    public static scaleNum: number = 1;
    /**
     * 舞台宽
     */
    public static W: number = 1024;
    /**
     * 舞台高
     */
    public static H: number = 768;

    /**
     * “流海” 高度
     */
    public static titleBarHeight:number = 0;
    public static bitmapText: egret.BitmapFont = null;

    private loadingView:LoadingUI;
    private loadAnim:LoadAnimation;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {

            Main.os = egret.Capabilities.os;
            Main.runtimeType = egret.Capabilities.runtimeType;

            //初始化龙骨时钟频率
            egret.Ticker.getInstance().register(function(advancedTime) {
                dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            },this);
            
            this.onWindowStatus();
            //窗口尺寸状态监听
            this.stage.addEventListener(egret.Event.RESIZE,this.onWindowStatus,this);

            context.onUpdate = () => {
                //每一帧都运行
            }
        })

        egret.lifecycle.onPause = () => {
            // 关闭渲染与心跳
            egret.ticker.pause();
            //console.log("app 进入后台");
        }

        egret.lifecycle.onResume = () => {
            // 打开渲染与心跳
            egret.ticker.resume();
            //console.log("app 进入前台");
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }
    /**
     * 窗口尺寸状态
     */
    private onWindowStatus(): void {
        //宽高信息
        Main.W = this.stage.stageWidth;
        Main.H = this.stage.stageHeight;

        console.log(this.stage.stageWidth)
        console.log(this.stage.stageHeight)


        //缩放信息
        var scale_X: number = Main.W / 1024;
        var scale_Y: number = Main.H / 768;
        Main.scaleNum = Math.min(scale_X,scale_Y);
    }

    //初始化Resource资源加载库
    private async runGame() {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 预加载loading资源组
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("loadingAssets");
    }

    /**
     * 资源组preload加载
     * platform 初始化
    */
    private async onResourceLoadComplete(event:RES.ResourceEvent){
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);


            let bgColor:egret.Shape=new egret.Shape();
            bgColor.graphics.beginFill(0x3366CC);
            bgColor.graphics.drawRect(0,0,Main.W,Main.H);
            bgColor.graphics.endFill();
            this.addChild(bgColor);


            //接口初始化
            DataBus._userCode = await platform.login();
            DataBus._userCode = DataBus._userCode['code'];
            console.log('code：'+DataBus._userCode);
            
            this.loadingView.DestroyOut(0);

            console.log('加载动画')
            this.loadAnim = new LoadAnimation();
            this.stage.addChild(this.loadAnim);
            this.loadAnim.touchEnabled=true;
            this.loadAnim.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.textContentDown,this)

        }else if(event.groupName=="loadingAssets"){
            this.loadingView=new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
    }

    /**
     * 资源组加载出错
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    }

     /**
     * 资源组加载出错
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        // console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.onProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    //load跳过按钮
    private textContentDown(){

        this.loadAnim.touchEnabled=false;
        this.loadAnim.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.textContentDown,this);
        this.loadAnim.DestroyOut(.1);//自我销毁
        this.initGameScene();
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 初始化场景
     */
    private async initGameScene(){
        this.createGameScene();
        this.initMessage();
    }
    
    /**
     * 初始化事件消息
     */
    private initMessage(){

    }

    private fileManage:LayerManagement;

    /**
     * 创建游戏场景
    */
    private createGameScene() {
        console.log("创建游戏场景");
        this.fileManage = new LayerManagement();
        this.addChild(this.fileManage);
    }
}
