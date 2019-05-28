<template>
  <div>
    <div class="zichanTT">
      <span class="cBlock"></span>
      <span class="ttTop">敏感/木马列表</span>
     </div>
    <div class="zichanContent">
      <div class="zichanFlex">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="未处理" name="first">未处理</el-tab-pane>
        <el-tab-pane label="已处理" name="second">已处理</el-tab-pane>
        <el-tab-pane label="白名单" name="third">白名单</el-tab-pane>
        <el-tab-pane label="误报" name="fourth">误报</el-tab-pane>
      </el-tabs>
      <div class="search">
        <input type="text" placeholder="IP/任务名称">
        <button class="searchBtn">搜索</button>
      </div>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="name"
          label="文件名称"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="威胁程度"
        >
        </el-table-column>
        <el-table-column
          prop="system"
          label="影响资产"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发现时间"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="date"
          label="状态"
          :formatter="formatter">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="400px"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="warning"
              @click="handleEdit(scope.$index, scope.row)">设为已处理</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">加入白名单</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">标记误报</el-button>
          </template>
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
        activeName: 'first',
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
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
    vertical-align: bottom;
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
  .zichanFlex{
    display: flex;
    justify-content: space-between;
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
  /deep/.el-tabs__content{
    display: none;
  }
</style>
<style type="text/css">
 .zichanFlex .el-tabs__content{
    display: none;
  }
</style>
