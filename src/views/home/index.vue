<template>
  <div>
    <div class="homeTop">
      <img :src="logo" alt="">
      <div class="homeTopS">
        <p class="homeTitle">云盾●漏洞扫描系统</p>
        <p class="homeContent">It is a small world after all. Globalization is that great process that started perhaps with Mr. Marco Polo, but has since regained its prestige after a short stint of protectionism following the great depression. It sure is great, isn’t it? I mean who doesn’t like</p>
        <span class="openService">开通服务</span>
      </div>
    </div>
    <div class="homeBottom">
      <p class="bottomTitle">产品价值</p>
      <el-row type="flex" :gutter="20" class="row-bg" justify="space-around">
        <el-col :span="8">
          <div class="grid-content mycont">
            <p class="contTitle">事前：网站风险预防</p>
            <p class="contDes">提前发现网站中存在的高中危漏洞、弱口令等风险，并提供详细的漏洞证明和解决方案帮助修复。</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content mycont">
            <p class="contTitle">事中：入侵事件检测</p>
            <p class="contDes">全方位监控成功入侵网站的安全事件，包括网页篡改、恶意代码、植入暗链、植入垃圾广告、网站后门，或恶意发布的敏感图片等。</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content mycont">
            <p class="contTitle">事后：实时告警通知</p>
            <p class="contDes">一旦检测发现您的网站存在成功入侵的安全事件或漏洞检测任务完成，可立即通过短信、邮件、站内信的方式通知您。</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return {
        logo:"./static/images/logo.png"
      }
    },
  }
</script>

<style scoped type="scss">
  .homeTop {
    height: 160px;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 1);
  }
  .homeTop img{
    width: 37px;
    height: 48px;
    margin-right: 30px;
  }
    .homeTitle{
      font-size:24px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(0,0,0,0.8);
      line-height:33px;
    }
    .homeContent{
      font-size:14px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(144,147,153,1);
      line-height:25px;
      margin: 10px 0 25px;
    }
    .openService{
      width:106px;
      height:32px;
      background:rgba(56,115,255,1);
      border-radius:2px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:32px;
      text-align: center;
      padding: 10px 25px;
    }
    .openService:hover{
      cursor: pointer;
    }
  .homeBottom{
    /*height:365px;*/
    background:rgba(255,255,255,1);
    padding: 30px 40px;
    margin-top: 20px;
  }
  .bottomTitle{
    font-size:24px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:33px;
    margin-bottom: 40px;
  }
  .mycont{
    height:163px;
    background:rgba(250,250,250,1);
    padding: 40px 30px;

  }
  .contTitle{
    font-size:18px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    text-align: center;
    color:rgba(0,0,0,0.8);
    line-height:25px;
    margin-bottom: 30px;
  }
  .contDes{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(144,147,153,1);
    line-height:20px;
    text-align: left;
  }
</style>
