<template>
  <div class="dialogs">
    <component v-for="item in dialogs" :is="item.name" :key="item.name" @onClose="onClose"></component>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'dialogs',
  data() {
    return {
      dialogs: []
    }
  },
  props: {
    dialog: {
      type: [Object],
      default() {
        return {}
      }
    }
  },
  watch: {
    dialog(next) {
      this.loadDialog(
        {
          name: next.name,
          module: next.module,
          data: JSON.parse(JSON.stringify(next.data)),
          methods: next.methods
        },
        () => {
          this.dialogs.push({ name: next.name })
        }
      )
    }
  },
  methods: {
    onClose() {
      let length = this.dialogs.length - 1
      this.dialogs.splice(length, 1)
    },
    loadDialog(data, fn) {
      // eslint-disable-next-line no-useless-escape
      let name = data.name.replace(/\-/g, '/')
      import('../dialog/'+ name + '')
        .then(module => {
          name = name.replace(/\//g, '-')
          module.name = name
          // 加载弹出框模块
          // 注入method 方法,注入初始化数据
          let tempModule = Vue.extend(module.default)
          tempModule = tempModule.extend({
            data: function() {
              return data.data
            },
            methods: data.methods
          })
          Vue.component(name, tempModule)
          fn()
        })
        .catch(err => {
          window.console.log(err)
          window.console.log('Chunk loading failed', name)
        })
    }
  }
}
</script>
