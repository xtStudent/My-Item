<style scoped>
.layout-logo{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <label class="text1">A</label>
        <label class="text2">Recording</label>
      </div>
      <div class="layout-nav">
        <MenuItem :name="item.link" @click.native="handleGo(item.link)" v-for="item in menu" :key="item.index">{{item.name}}</MenuItem>
        <MenuItem name="5">
          <Dropdown v-if="login">
              <a href="javascript:void(0)">
                  小谭谭
                  <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                  <DropdownItem>管理中心</DropdownItem>
                  <DropdownItem @click.native="handleExit">退出登录</DropdownItem>
              </DropdownMenu>
          </Dropdown>
          <div v-else>
            <Button type="primary" @click="handleLogin">登录 | 注册</Button>
          </div>
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>
<script>
export default {
  name: 'h-header',
  data () {
    return {
      login: true,
      menu: [
        {
          link: 'index',
          name: '首页'
        },
        {
          link: 'lore',
          name: '知识'
        },
        {
          link: 'project',
          name: '项目'
        },
        {
          link: 'aboutme',
          name: '关于我'
        }
      ]
    }
  },
  methods: {
    handleExit () {
      this.login = false
    },
    handleLogin () {
      this.$router.push({
        path: 'user'
      })
    },
    handleGo (item) {
      this.$router.push({
        path: item
      })
    }
  }
}
</script>
<style scoped>
a {
  color: rgba(255,255,255,.7);
}
.text1 {
  color: #41B883;
  font-size: 16px;
}
.text2 {
  color: #fff;
  font-size: 16px;
}
</style>
