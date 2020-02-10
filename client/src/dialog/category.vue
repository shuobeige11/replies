<template>
  <el-dialog 
    title="修改类别"
    :visible="true" 
    @close="onCancel"
    class="modal">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="分类名称：">
        <el-input v-model="form.name" placeholder="请输入分类名称"></el-input>
      </el-form-item>
      <el-form-item label="关键字 ：">
        <el-input v-model="form.keystr" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item label="网站列表：">
        <el-select v-model="form.weblist" multiple placeholder="请选择活动区域">
          <el-option v-for="(item, index) in weblist" 
           :label="item.url" 
           :value="item.name"
           :key="index"
           />
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用：">
        <el-switch
          v-model="form.switch"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSure">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import http from '../axios'
export default {
  data() {
    return {
      form: {
        name: '',
        keystr: '',
        weblist: '',
        switch: 0
      },
      weblist: [],
    }
  },
  async mounted() {
    this.form.name = this.editor && this.editor.name || ''
    this.form.keystr = this.editor && this.editor.keystr || ''
    this.form.switch = this.editor && !!Math.ceil(this.editor.switch) || false
    let res = await http({
      url: 'api/website' 
    })
    this.weblist = res.result
  },
  methods: {
    onCancel() {
      this.$emit('onClose', this.$options.name)
    },
    async onSure() {
      this.form.weblist = this.form.weblist.map(item => {
        return {
          desc: '',
          url: item
        }
      })
      this.form.switch = this.form.switch ? '1' : '0'
      this.form.weblist = JSON.stringify(this.form.weblist)
      if (this.editor && this.editor.code) {
        await http({
          url: `api/category/` + this.editor.code,
          method: 'put',
          data: this.form
        })
      } else {
        await http({
          url: `api/category`,
          method: 'post',
          data: this.form
        })
      }
      this.init()
      this.onCancel()
    }
  }
}
</script>