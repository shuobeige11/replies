<template>
  <div id="app">
    <div class="header">
      邮件自动信息推送系统
    </div>
    <el-container>
      <el-aside>
        <el-menu
          class="el-menu-vertical-demo"
          @select="onSelect"
        >
         <el-menu-item index="category">
            <i class="el-icon-location"></i>
            <span>分类列表</span>
          </el-menu-item>
          <el-menu-item index="website">
            <i class="el-icon-menu"></i>
            <span>网站列表</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <i class="el-icon-setting"></i>
            <span>个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    onSelect(name) {
      this.$router.replace(`/${name}`)
    }
  }
}
</script>

<style>
html, body, div, ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
html, body {
  height: 100%
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.header {
  height: 80px;
  background: #EFF5FB;
  padding-left: 30px;
  line-height: 80px;
  border-bottom: 1px solid #ccc;
  font-weight: bold
}
.el-aside {
  color: #333;
  text-align: center;
  padding: 30px 0;
  flex: 1
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  height: 100%;
  flex: 6!important;
  border-left: 1px solid #ccc
}

.el-container {
  display: flex;
  height: 100%
}
.el-menu {
  border: 0!important;
  background: none!important
}
</style>
