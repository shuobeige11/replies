<template>
  <el-dialog 
    title="修改网址"
    :visible="true" 
    @close="onCancel"
    class="modal">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="网址名称：">
        <el-input v-model="form.url" placeholder="http://"></el-input>
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
        url: ''
      },
    }
  },
  async mounted() {
    this.form.url = this.editor && this.editor.name || ''
  },
  methods: {
    onCancel() {
      this.$emit('onClose', this.$options.name)
    },
    async onSure() {
      await http({
        url: `api/website`,
        method: 'post',
        data: {
          url: this.form.url
        }
      })
      this.init()
      this.onCancel()
    }
  }
}
</script>