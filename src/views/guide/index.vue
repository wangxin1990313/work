<template>
    <div class="guide-page">
    	<div class="guide-left">
            <div class="logo"></div>
            <h2>Why Do You Need To Join An Affiliate Marketing Network</h2>
            <p>Free Beauty Samples: What They Are and How to Find Them Have you heard of free beauty samples before? If you have, have you been requesting them whenever you come across free sample offers? If you haven’t, you may want to think about doing so, as there are a number of benefits to requesting free beauty samples, a few of which are briefly touched on below. </p>
            <el-button class="guide-btn" type="primary">Noah Greer<i></i></el-button>
        </div>
        <div class="guide-right">
            <ul>
                <li>产品与服务</li>
                <li>技术文档</li>
                <li>控制台</li>
                <li @click="loginpage()">登录/注册</li>
            </ul>
            <div class="guide-img">
                <img src="../../assets/image/guide.png" style='width:100%'>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'guide',
        data(){
            return {
            }
        },
        mounted () {
            const that = this
            window.onresize = () => {
                that.setRem()
            }
        },
        methods: {
            setRem(){
                var width = document.body.offsetWidth;
                var nowFont=width/1280*14;
                var htmlFont=document.getElementsByTagName('html')[0];
                htmlFont.style.fontSize =nowFont+"px";
            },
            loginpage(){
                this.$router.push({ name: 'login' })
            }
        }
    }
</script>

<style lang="scss" scoped>
.guide-page{
    padding: 0 3%;
    height: 100vh;
    .guide-left{
        float:left;
        width: 51%;
        .logo{
            margin-top: 2.2rem;
            width: 16.5rem;
            height: 1.85rem;
            background: url('../../assets/image/guide-logo.png') no-repeat;
            background-size: contain;
        }
        h2{
            margin-top: 8rem;
            width: 38rem;
            margin-left: 2.1rem;
            font-size:2.5rem;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(0,0,0,0.8);
            line-height:3.5rem;;
        }
        p{
            width: 38rem;
            margin:1.2rem 0 1.2rem 2.1rem;
            font-size: 1.2rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(0,0,0,0.8);
            line-height:1.7rem;
        }
        .guide-btn{
            margin-left: 2.1rem;
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
    .guide-right{
        float:right;
        width: 49%;
        ul{
            margin-top: 2.2rem;
            float:right;
            margin-bottom: 7rem;
            li{
                float:left;
                margin: 0 1.42rem;
                height:1.85rem;
                line-height: 1.85rem;
                font-size:1rem;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(0,0,0,0.8);
                cursor: pointer;
            }
            li:last-child{
                width: 9.1rem;
                height:1.85rem;
                line-height: 1.85rem;
                text-align: center;
                background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(243,243,247,1) 100%);
                box-shadow:0px 2px 4px 0px rgba(0,51,127,0.2);
                border-radius:4px;
                border:1px solid rgba(233,234,236,1);
            }
        }
        .guide-img{
            width: 80%;
            padding: 0 3.5% 0 0;
            float: right;
            img{
                width:100%;
            }
        }
    }
}

</style>
