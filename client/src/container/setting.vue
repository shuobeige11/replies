<template>
   <div id="app">
      <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="服务器地址：">
        <el-input v-model="form.server" placeholder="请输入邮件服务器地址（仅仅支持smtp）"></el-input>
      </el-form-item>
      <el-form-item label="端口号：">
        <el-input v-model="form.ports" placeholder="请输入邮件服务器端口号"></el-input>
      </el-form-item>
      <el-form-item label="发送方邮箱地址：">
        <el-input v-model="form.mailfrom" placeholder="请输入发送方邮箱地址"></el-input>
      </el-form-item>
      <el-form-item label="接收方邮箱地址：">
        <el-radio-group v-model="radio">
           <el-radio :label="0">我</el-radio>
           <el-radio :label="1">其他</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="授权码：">
         <el-input v-model="form.authpass" placeholder="请输入授权码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSure">提交</el-button>
      </el-form-item>
    </el-form>
    <dialogs :dialog="dialog"/>
   </div>
</template>
<script>
import http from '../axios'
import Dialogs from '../components/Dialog'
export default {
  name: 'setting',
  components: {
    Dialogs 
  },
  data() {
    return {
      form: {
        code: 0,
        server: '',
        ports: 0,
        mailto: '',
        mailfrom: '',
        authpass: ''  
      },
      radio: 0,
      dialog: {}
    }
  },
  async mounted() {
    let res = await http({
      url: 'api/setting' 
    })
    res = res.result[0]
    Object.assign(this.form, {
      server: res.server,
      ports: res.ports.toString(),
      mailto: res.mailto,
      mailfrom: res.mailfrom,
      authpass: res.authpass,
      code: res.code
    })
  },
  watch: {
    radio(next) {
      let el 
      if (this.form.mailto) {
        el = this.form.mailto.split(',')
        el = [].slice.call(el)
        el = el.map(item => {
          return {
            value: item
          }
        })
      }
      if (next) {
        this.dialog = {
          name: 'setting',
          data: {
            el: el
          },
          methods: {
            init: data => {
              if (data.length ===0) {
                this.form.mailto = this.form.mailfrom
                return
              }
              data = data.map(item => item.value)
              this.form.mailto = data.join(',')
            }
          }
        }
      } else {
        this.form.mailto = this.form.mailfrom 
      }
    }
  },
  methods: {
    async onSure() {
      await http({
        url: 'api/setting',
        method: 'post',
        data: this.form
      })
    }  
  }
}
</script>