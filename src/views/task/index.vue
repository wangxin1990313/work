<template>
  <div>
    <div class="zichanTT">
      <span class="cBlock"></span>
      <span class="ttTop">扫描任务</span>
      <p class="add"><img src="" alt=""><span>创建任务</span></p>
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
          label="任务ID"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="任务名称"
        >
        </el-table-column>
        <el-table-column
          prop="system"
          label="扫描类型"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="date"
          label="扫描目标"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
        prop="date"
        label="扫描频率"
        :formatter="formatter">
      </el-table-column>
        <el-table-column
          prop="date"
          label="开始/结束时间"
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
          prop="date"
          label="已发数(敏感/木马)"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="200px"
          >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="warning"
              @click="handleEdit(scope.$index, scope.row)">导出报表</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
  .add{
    float: right;
    padding: 6px 15px;
    margin-top: -6px;
    text-align: center;
    background:rgba(56,115,255,1);
    border-radius:2px;
  }
  .add:hover{
    cursor: pointer;
  }
  .add img{
    width: 14px;
    height: 14px;
  }
  .add span{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
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
