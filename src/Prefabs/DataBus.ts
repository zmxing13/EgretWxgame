//数据池
class DataBus extends egret.DisplayObjectContainer{
    //code
    public static _userCode:string='';
    //token
    public static _token:string='';
    //头像
    public static _userAvatar:string='';
    //昵称
    public static _nickName:string='';
    /**
     * 等级
     * arr[0] = 1年级等级
     *       ...
     * arr[5] = 6年级等级 
     */
    public static _level:Array<number>;
    //经验值/总积分
    public static  _empiricalValue:number=0;
    //积分
    public static _integral:number=0;
    //疲劳值
    public static _tired:number=0;
    
	public constructor() {
		super();		
	}
}
