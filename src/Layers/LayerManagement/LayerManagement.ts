/**
 *文件管理 /控制器
*/
class LayerManagement extends BaseContainer{

	/**
	 * 开始页 获取用户基本信息
	 */
	private openClass:LayerOpenClass;
    /**
	 * 自定义页 用户自定义头像,昵称
	 */
	private customClass:LayerCustom;
	/**
	 * 世界地图页
	 */
	private worldClass:LayerWordMap;
	/**
	 * 个人主页 用户信息
	 */
	private userHome:LayerHomePage;
	


	public constructor() {
		super();
		this.createGameScene();
		this.UpWindowData();
	}

	/**
     * 初始化事件消息
     */
	private createGameScene(){
 		this.openClass = new LayerOpenClass();
        this.addChild(this.openClass);
        this.openClass.addEventListener(EventEnumerate.SELECT_COMPLETE,this.customDispathEvent,this);
	}

	private customDispathEvent(e:EventManage){
        if(e.data){
            this.openClass.DestroyOut(.1);
            this.customClass = new LayerCustom();
            this.addChild(this.customClass);
        }
    }
	
	/**
     * 界面布局 (尺寸发生变化时会执行)
	 * 【初始化时需要 图形创建后执行一次】  
     */
	public UpWindowData(){


	}	
}