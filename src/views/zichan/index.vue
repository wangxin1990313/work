<template>
    <div>
      <div class="zichanTT">
        <span class="cBlock"></span>
        <span class="ttTop">资产列表</span>
      </div>
      <div class="zichanContent">
        <div class="search">
          <input type="text" placeholder="请输入资产名称/资产IP">
          <button class="searchBtn">搜索</button>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
            prop="name"
            label="资产IP/名称"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="标签"
            >
          </el-table-column>
          <el-table-column
            prop="system"
            label="操作系统"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            prop="date"
            label="保护状态"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            prop="date"
            label="安装时间"
            :formatter="formatter">
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        currentPage:1,
        tableData: [{
          date: '2016-05-02',
          name: 'Minnie Ford',
          address: 'Ethiopia',
          system:"Transfering",
        },
          {
            date: '2016-05-02',
            name: 'Minnie Ford',
            address: 'Ethiopia',
            system:"Transfering",
          },
          {
            date: '2016-05-02',
            name: 'Minnie Ford',
            address: 'Ethiopia',
            system:"Transfering",
          },
          {
            date: '2016-05-02',
            name: 'Minnie Ford',
            address: 'Ethiopia',
            system:"Transfering",
          },
          {
            date: '2016-05-02',
            name: 'Minnie Ford',
            address: 'Ethiopia',
            system:"Transfering",
          },]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style scoped>
.zichanTT{
  padding: 20px;
  border-bottom: 1px solid #EBEEF5;
  background:rgba(255,255,255,1);
}
  .cBlock{
    width:5px;
    height:20px;
    background:rgba(56,115,255,1);
    display: inline-block;
    vertical-align: middle;
  }
  .ttTop{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(78,86,113,1);
    line-height:22px;
  }
  .zichanContent{
    background:rgba(255,255,255,1);
    padding: 20px;
  }
  .search{
    margin-bottom: 20px;
  }
  .search input{
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:400;
    text-indent: 15px;
    color:rgba(144,147,153,1);
    line-height:14px;
    outline: none;
    width:190px;
    height:32px;
    border-radius:2px;
    border:1px solid rgba(220,223,230,1);
  }
  .searchBtn{
    width:70px;
    height:34px;
    background:rgba(56,115,255,1);
    border:none;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:34px;
    text-align: center;
    margin-left: 16px;
  }
  /deep/.el-table th, .el-table tr{
    background-color: #FAFAFA;
  }
  /deep/.el-table th{
    border: none;
  }
/deep/.el-table .cell{
  text-align: center;
}
/deep/.el-pagination{
    margin-top: 36px;
  text-align: right;
  }
</style>
