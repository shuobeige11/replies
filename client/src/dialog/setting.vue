<template>
  <el-dialog 
    title="新增邮箱"
    :visible="true" 
    @close="onCancel"
    class="modal">
    <el-form ref="form" label-width="120px">
      <el-form-item label="邮箱地址：" v-for="(item, key) in emails" :key="key">
        <el-row>
          <el-col :span="18">
            <el-input v-model="item.value" placeholder="xxx@xxx.xx"></el-input>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="4">
            <span class="el-icon-delete" @click="onDel(key)"></span>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSure">提交</el-button>
        <el-button type="primary" @click="onAdd">新增</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>  
</template>
<script>
export default {
  data() {
    return {
      emails: [],
      email: ''
    }
  },
  mounted() {
    this.emails = this.el || []
  },
  methods: {
    onCancel() {
      this.$emit('onClose', this.$options.name)
    },
    onSure() {
      this.init(this.emails)
      this.onCancel()
    },
    onDel(index) {
      this.emails = this.emails.filter((item, num) => num !== index)
    },
    onAdd() {
      this.emails.push({
        value: ''
      })
    }
  }  
}
</script>