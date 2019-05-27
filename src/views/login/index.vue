<template>
    <div class="login-page">
    	<div class="login_left">
           <div class="loginl_pic">
               <img src="../../assets/image/loginl.png"/>
           </div>
           <div class="loginl_text">
               <h2>Astronomy Or Astrology</h2>
               <p>Barbecue party tips can help a host put together an extraordinary event for family and friends. </p>
           </div>
    	</div>
        <div class="login_right">
            <div class="login-box">
                <div class="login-logo"></div>
                <ul class="login-tab">
                    <li @click="checkTab(true)" :class="{active:temp}">登录</li>
                    <li @click="checkTab(false)" :class="{active:!temp}">注册</li>
                </ul>
                <div class="login-content" v-if="temp">
                    <label>账号</label>
                    <div class="login-input">
                        <i class="user-pic"></i><input type="text" placeholder="输入用户名/邮箱"/>
                    </div>
                    <label>密码</label>
                    <div class="login-input">
                        <i class="pwd-pic"></i><input type="text" placeholder="输入密码"/>
                    </div>
                    <div class="drag" ref="dragDiv">
                        <div class="drag_bg"></div>
                        <div class="drag_text">{{confirmWords}}</div>
                        <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>
                    </div>
                    <div class="login-radio">
                        <span class="save"><input type="checkbox" />保存登录</span>
                        <span class="forget">忘记密码?</span>
                    </div>
                    <div class="save-btn">
                        <a>立即登录<i></i></a>
                    </div>
                </div>
                <div class="login-content" v-if="!temp">
                    <label>账号1</label>
                    <div class="login-input">
                        <i class="user-pic"></i><input type="text" placeholder="输入用户名/邮箱"/>
                    </div>
                    <label>密码2</label>
                    <div class="login-input">
                        <i class="pwd-pic"></i><input type="text" placeholder="输入密码"/>
                    </div>
                    <div class="drag" ref="dragDiv">
                        <div class="drag_bg"></div>
                        <div class="drag_text">{{confirmWords}}</div>
                        <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>
                    </div>
                    <div class="login-radio">
                        <span class="save"><input type="checkbox" />保存登录</span>
                        <span class="forget">忘记密码?</span>
                    </div>
                    <div class="save-btn">
                        <a>立即登录<i></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         name: 'login',
        data(){
            return {
                beginClientX:0,           /*距离屏幕左端距离*/
                mouseMoveStata:false,     /*触发拖动状态  判断*/
                maxwidth:'',               /*拖动最大宽度，依据滑块宽度算出来的*/
                confirmWords:'拖动滑块验证',   /*滑块文字*/
                confirmSuccess:false,           /*验证成功判断*/
                temp:true
            }
        },
        methods: {
            //mousedoen 事件
            mousedownFn:function (e) {
                if(!this.confirmSuccess){
                    e.preventDefault && e.preventDefault();   //阻止文字选中等 浏览器默认事件
                    this.mouseMoveStata = true;
                    this.beginClientX = e.clientX;
                }
            },
            //验证成功函数
            successFunction(){
                this.confirmSuccess = true
                this.confirmWords = '验证通过';
                if(window.addEventListener){
                    document.getElementsByTagName('html')[0].removeEventListener('mousemove',this.mouseMoveFn);
                    document.getElementsByTagName('html')[0].removeEventListener('mouseup',this.moseUpFn);
                }else {
                    document.getElementsByTagName('html')[0].removeEventListener('mouseup',()=>{});
                }
                document.getElementsByClassName('drag_text')[0].style.color = '#fff'
                document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px';
                document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px';
            },
            //mousemove事件
            mouseMoveFn(e){
                if(this.mouseMoveStata){
                    let width = e.clientX - this.beginClientX;
                    if(width>0 && width<=this.maxwidth){
                        document.getElementsByClassName('handler')[0].style.left = width + 'px';
                        document.getElementsByClassName('drag_bg')[0].style.width = width + 'px';
                    }else if(width>this.maxwidth){
                        this.successFunction();
                    }
                }
            },
            //mouseup事件
            moseUpFn(e){
                this.mouseMoveStata = false;
                var width = e.clientX - this.beginClientX;
                if(width<this.maxwidth){
                    document.getElementsByClassName('handler')[0].style.left = 0 + 'px';
                    document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px';
                }
            },
            //tab切换
            checkTab(t) {
                this.temp=t
            }
        },
        mounted(){
            this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
            // this.maxwidth = 280;
            document.getElementsByTagName('html')[0].addEventListener('mousemove',this.mouseMoveFn);
            document.getElementsByTagName('html')[0].addEventListener('mouseup',this.moseUpFn)
        }
    }
</script>

<style lang="scss" scoped>
.login-page{
    width: 100%;
    // height: 100vh;
    background: #fff;
    .login_left{
        float: left;
        width: 41%;
        height: 100vh;
        background-color: #F7F9FC;
        .loginl_pic{
            width: 66%;
            margin: 14vh auto 0;
            img{
                width: 100%;
            }
        }
        .loginl_text{
            width: 79%;
            margin: 0 auto;
            //padding-bottom: 15vh;
            h2{
                font-size: 24px;
                color: #000;
                text-align: center;
                margin: 60px 0 30px 0;
            }
            p{
               font-size: 18px;
               color: #7b7c7d;
               text-align: center
            }
        }
    }
    .login_right{
        float: left;
        width: 59%;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        .login-box{
            width: 320px;
            position: absolute;
            left: calc(50% - 160px);
            .login-logo{
                margin: 0 auto;
                width: 130px;
                height: 56px;
                background: url('../../assets/image/logo.png') no-repeat;
                background-size: contain;
                margin-bottom: 40px;
            }
            .login-tab{
                margin-bottom: 30px;
                li{
                    display: inline-block;
                    font-size: 18px;
                    color: #909399;
                    margin-right: 30px;
                    padding-bottom: 10px;
                    cursor: pointer;
                }
                li.active{
                    color: #000;
                    border-bottom: 2px solid #3873FF
                }
            }
            .login-content{
                label{
                    display: inline-block;
                    text-align: left;
                    margin:20px 0 10px;
                }
                .login-input{
                    width: 320px;
                    height: 48px;
                    overflow: hidden;
                    border: 1px solid rgba(220,223,230,1);
                    border-radius: 4px;
                    .user-pic{
                        display: block;
                        margin:14px 16px;
                        width:16px;
                        height:20px;
                        background: url('../../assets/image/user.png') no-repeat;
                        background-size: contain;
                        float: left;
                    }
                    .pwd-pic{
                        display: block;
                        margin:14px 16px;
                        width:16px;
                        height:20px;
                        background: url('../../assets/image/clock.png') no-repeat;
                        background-size: contain;
                        float: left;
                    }
                    input{
                            box-sizing: border-box;
                            width: 272px;
                            height: 14px;
                            line-height: 14px;
                            padding: 24px 17px;
                            float: left;
                            border-width: 1px;
                            border-color: transparent;
                            border-left: 1px solid #dcdfe6;
                            border-top: none;
                            border-right: none;
                            border-bottom: none;
                    }
                }
                .drag{
                    position: relative;
                    background-color: #e8e8e8;
                    width: 100%;
                    height: 48px;
                    line-height: 48px;
                    margin-top: 30px;
                    text-align: center;
                    .handler{
                        width: 40px;
                        height: 46px;
                        border: 1px solid #ccc;
                        cursor: move;
                    }
                    .handler_bg{
                        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;
                    }
                    .handler_ok_bg{
                        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==") no-repeat center;
                    }
                    .drag_bg{
                        background-color: #7ac23c;
                        height: 48px;
                        width: 0px;
                    }
                    .drag_text{
                        position: absolute;
                        top: 0px;
                        width: 100%;text-align: center;
                        -moz-user-select: none;
                        -webkit-user-select: none;
                        user-select: none;
                        -o-user-select:none;
                        -ms-user-select:none;
                    }

                }
                .login-radio{
                    margin-top: 20px;
                    span{
                        font-size: 14px;
                        color: #909399;
                    }
                    .forget{
                        float: right
                    }
                }
                .save-btn{
                    width: 100%;
                    height: 48px;
                    margin-top: 20px;
                    a{
                        display: inline-block;
                        width: 100%;
                        height:48px;
                        text-align: center;
                        line-height: 48px;
                        background:linear-gradient(180deg,rgba(100,140,255,1) 0%,rgba(67,116,250,1) 100%);
                        box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);
                        border-radius:4px;
                        font-size:14px;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        i{
                            display: inline-block;
                            width: 15px;
                            height:10px;
                            background: url('../../assets/image/point.png') no-repeat;
                            background-size: contain;
                            margin-left: 9px;
                        }
                    }
                }
            }
        }
    }

}
</style>
