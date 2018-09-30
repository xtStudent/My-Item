<template>
  <div class="login">
    <div class="content">
    <Card class="box">
      <div class="left">
        <img class="img" src="../../assets/images/come-on.png" alt="" srcset="">
      </div>
      <div class="right">
        <div class="logo" @click="handleEnter">
          <img src="../../assets/logo.png" alt="">
          <label class="text1">A</label>
          <label class="text2">Recording</label>
        </div>
        <div class="bottom">
          <div v-for="item in tabs" :key="item.key" class="tabpane" :class="seled === item.key ? 'active' : ''" @click="handleTab(item.key)">
            <label>{{item.value}}</label>
          </div>
          <div class="form" v-if="seled === 'login'">
            <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
              <FormItem prop="user">
                <Input type="text" size="large" v-model="formLogin.user" placeholder="请输入账户">
                  <Icon size="16" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" size="large" v-model="formLogin.password" placeholder="请输入密码">
                  <Icon size="16" type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" long @click="handleSubmit('formLogin')">登录</Button>
              </FormItem>
            </Form>
          </div>
          <div class="form" v-else>
            <Form ref="formRegister" :model="formRegister" :rules="ruleRegister">
              <FormItem prop="user">
                <Input type="text" size="large" v-model="formRegister.user" placeholder="请输入账户">
                  <Icon size="16" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" size="large" v-model="formRegister.password" placeholder="请输入密码">
                  <Icon size="16" type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" long @click="handleSubmitRegister('formRegister')">注册</Button>
              </FormItem>
            </Form>
          </div>
          <div class="cell">
            <p>
              <span style="float:left">忘记密码？</span>
              <span style="float:right">没有账号？<label style="color:#2d8cf0;">去注册</label></span>
            </p>
          </div>
        </div>
      </div>
    </Card>
    <div>
      <center class="info">Copyright © 2018-2020 ARecording信息技术有限公司 | 渝ICP备00000000号</center>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      tabs: [
        {
          key: 'login',
          value: '账户登录'
        },
        {
          key: 'register',
          value: '账户注册'
        }
      ],
      seled: 'login',
      formLogin: {
        user: '',
        password: ''
      },
      ruleLogin: {
        user: [
          { required: true, message: '请填写你的账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写你的密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '你的密码长度不能少于6个字符', trigger: 'blur' }
        ]
      },
      formRegister: {
        user: '',
        password: ''
      },
      ruleRegister: {
        user: [
          { required: true, message: '请填写你的账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写你的密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '你的密码长度不能少于6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleEnter () {
      this.$router.push({
        path: 'home'
      })
    },
    handleTab (key) {
      this.seled = key
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('登录成功!');
          this.$router.push({
            path: 'home'
          })
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleSubmitRegister(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('注册成功!');
          this.seled = 'login'
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>
<style scoped>
.login {
  height: 100vh;
  background-color: #F4F2F5;
}
.content {
  width: 900px;
  height: 450px;
  position: absolute;
  top: 0; right: 0; bottom:0; left: 0;
  margin: auto;
}
.box {
  height: 100%;
}
.left {
  float: left;
  width: 60%;
  height: 418px;
  padding: 16px;
  border-right: 1px solid #DBDBDB;
}
.img {
  width: 100%;
  height: auto;
}
.right {
  float: right;
  width: 40%;
}
.logo {
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logo img {
  width: 40px;
  height: auto;
}
.text1 {
  color: #41B883;
  font-size: 20px;
}
.text2 {
  color: #35495E;
  font-size: 20px;
}
.bottom {
  width: 100%;
  padding: 0 40px;
  height: 310px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.tabpane {
  width: 50%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid #e8eaec;
}
.active {
  color: #2d8cf0;
  border-bottom: 2px solid #2d8cf0;
}
.form {
  width: 265px;
  position: absolute;
  margin-top: 80px;
}
.cell {
  color: #ddd;
  width: 265px;
  cursor: pointer;
  position: absolute;
  margin-top: 240px;
  font-size: 12px;
}
.info {
  margin-top: 20px;
  padding: 10px;
}
</style>
