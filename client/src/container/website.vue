<template>
   <div id="app" class="app">
      <div class="btn">
        <el-button type="primary" @click="onClick">新增网址</el-button>
      </div>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="网址">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <a href="javascript:void(0)" @click="onDel(scope.row.code)">删除</a>
        </template>
      </el-table-column>
    </el-table>
    <dialogs :dialog="dialog"/>
   </div>
</template>
<script>
import http from '../axios'
import Dialogs from '../components/Dialog'
export default {
  name: 'website',
  data() {
    return {
      dialog: {},
      tableData: []
    }
  },
  components: {
    Dialogs
  },
  async mounted () {
    let res = await http({
      url: 'api/website' 
    })
    this.tableData = res.result
  },
  methods: {
    onClick() {
      this.dialog = {
        name: 'website',
        data: {},
        methods: {
          init: async() => {
            let res = await http({
              url: 'api/website' 
            })
            this.tableData = res.result
          }
        }
      }
    },
    onDel(code) {
      this.$confirm('确认是否删除该条记录', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '放弃修改'
      }).then(async () => {
        await http({
          url: 'api/website/' + code,
          method: 'DELETE'
        })
        let res = await http({
          url: 'api/website' 
        })
        this.tableData = res.result
      })
    }
  }
}
</script>
<style scoped>
  .btn {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px
  }
  a {
    color: #409EFF;
    padding: 0 10px 0 0
  }
</style>