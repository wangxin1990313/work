<template>
  <div>
    <div class="totalTop">
      <span>总览</span>
      <ul class="totalList">
        <li><span>产品动态</span></li>
        <li><span>基础版</span></li>
        <li><span class="try">升级企业版</span></li>
        <li><span class="try">试用</span></li>
      </ul>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content bg-white">
          <div class="middleTop">
            <el-progress type="circle" :percentage="90" color="#78AE39"></el-progress>
            <div class="topRight">
              <p>恭喜您，您的资产安全状态良好。</p>
              <ul class="rightNum">
                <li>
                  <img src="" alt="">
                  <span>保护资产(台)</span>
                  <countTo :startVal='numOne.startVal' :endVal='numOne.endVal' :duration='numOne.duration'></countTo>
                </li>
                <li>
                  <img src="" alt="">
                  <span>未保护资产(台)</span>
                  <countTo :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
                </li>
              </ul>
            </div>
          </div>
          <div class="middleBottom">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content myconts">
                  <p class="contsTtile">资产数量</p>
                  <countTo class="num" :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content myconts">
                  <p class="contsTtile">文件总数</p>
                  <countTo class="num" :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content myconts">
                  <p class="contsTtile">异常文件</p>
                  <countTo class="num" :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content myconts">
                  <p class="contsTtile">标记误报</p>
                  <countTo class="num" :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-white leftConts">
          <p class="leftTitle">
            <span>应急漏洞</span>
            <span>查看全部</span>
          </p>
          <ul class="leftList">
            <li>
              <img src="" alt="">
              <span>Free Classifieds Using Them To Promote Your Stuff Online</span>
            </li>
            <li>
              <img src="" alt="">
              <span>Free Classifieds Using Them To Promote Your Stuff Online</span>
            </li>
            <li>
              <img src="" alt="">
              <span>Free Classifieds Using Them To Promote Your Stuff Online</span>
            </li>
            <li>
              <img src="" alt="">
              <span>Free Classifieds Using Them To Promote Your Stuff Online</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <div class="contFoot">
      <div class="leftTitles">
        <span>应急漏洞</span>
        <ul class="leftRight">
          <li>
            <span>保护资产(台)</span>
            <countTo  :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
          </li>
          <li>
            <span>未保护资产(台)</span>
            <countTo  :startVal='numTwo.startVal' :endVal='numTwo.endVal' :duration='numTwo.duration'></countTo>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to'
  export default {
    name: 'index',
    components: { countTo },
    data(){
      return{
        numOne:{
          duration: 5000,
          startVal: 0,
          endVal: 2018
        },
        numTwo:{
          duration: 5000,
          startVal: 0,
          endVal: 2018
        }
      }
    }
  }
</script>

<style scoped>
.totalTop{
  height:63px;
  line-height: 63px;
  margin-top: -20px;
  margin-right: -20px;
  margin-left: -20px;
  margin-bottom: 20px;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
  background:rgba(255,255,255,1);
}
  .totalList{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .totalList li{
    font-size:16px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:22px;
    margin-left: 30px;
  }
  .totalList li:hover{
    cursor: pointer;
  }
  .try{
    border-radius:2px;
    border:1px solid rgba(56,115,255,1);
    color:rgba(56,115,255,1);
    padding: 8px 26px;
    text-align: center;
    font-family:PingFangSC-Regular;
    font-weight:400;
  }
  .try:hover{
    color:rgba(255,255,255,1);
    cursor: pointer;
    background:rgba(56,115,255,1);
  }
  .middleTop{
    /*height:200px;*/
    background:rgba(255,255,255,1);
    margin-bottom: 20px;
    padding: 37px 54px;
    display: flex;
    justify-content: stretch;
  }
  .middleBottom{
    background:rgba(255,255,255,1);
    padding: 20px 15px;
  }
  .topRight{
    margin-left: 56px;
  }
  .rightNum{
    display: flex;
    justify-content: stretch;
  }
  .topRight p{
    font-size:18px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:25px;
    margin-bottom: 60px;
  }
  .rightNum li:nth-child(1){
    margin-right: 78px;
  }
  .rightNum li span:nth-child(2){
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:20px;
    margin-right: 20px;
  }
  .rightNum li span:nth-child(3){
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(56,115,255,1);
    line-height:33px;
  }
  .rightNum li img{
    margin-right: 10px;
    width: 20px;
    height: 24px;
  }
  .myconts{
    padding: 48px 60px;
    background:rgba(250,250,250,1);
    text-align: center;
  }
  .contsTtile{
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:20px;
    margin-bottom: 30px;
  }
  .num{
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(56,115,255,1);
    line-height:33px;
  }
  .leftConts{
    background:rgba(255,255,255,1);
  }
  .leftTitle,.leftTitles{
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    border-bottom: 1px solid #EBEEF5;
  }
  .leftTitle span,.leftTitles span{
    line-height: 62px;
  }
  .leftTitle span:nth-child(1){
    font-size:16px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:22px
  }
.leftTitle span:nth-child(2){
  font-size:14px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(0,0,0,0.8);
  line-height:20px;
}
.leftTitle:nth-child(1):hover{
  cursor: pointer;
}
  .leftList{
    padding: 22px 15px;
  }
.leftList li{
  margin-bottom: 26px;
  height: 60px;
}
.leftList li:last-child{
  margin-bottom: 14px;
}
.leftList li:hover{
  cursor: pointer;
}
  .leftList li img{
    width: 20px;
    height: 20px;
  }
  .leftList li span{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(0,0,0,0.8);
    line-height:20px;
  }
  .contFoot{
    margin-top: 20px;
    background:rgba(255,255,255,1);
  }
  .leftRight{
    display: flex;
    justify-content: stretch;
  }
.leftTitles>span{
  font-size:16px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(0,0,0,0.8);
  line-height:22px
}
  .leftRight li span:nth-child(1){
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(0,0,0,0.8);
    line-height:22px;
    margin-right: 23px;
  }
.leftRight li:nth-child(1){
  margin-right: 50px;
}
.leftRight li span:nth-child(2){
  font-size:16px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:#3873FF;
  line-height:22px
}
</style>
