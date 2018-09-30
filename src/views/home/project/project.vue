<template>
  <div style="background-color: #fff;">
    <div class="item-html">
      <div class="item-box">
        <h2>我的项目</h2>
        <Divider orientation="left">筛选条件</Divider>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" style="margin-left:20px;">
          <FormItem label="项目名称：" prop="name">
            <Input v-model="formValidate.name" style="width: 300px;" placeholder="请输入项目名称"></Input>
          </FormItem>
          <FormItem label="项目类型：" prop="city">
            <Select v-model="formValidate.city" placeholder="请选择" style="width: 300px;">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">筛选</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
        <Divider orientation="left">项目列表</Divider>
        <div class="item-desc">
          <Card style="width:240px;margin:10px;height: 220px;" v-for="item in itemList" :key="item.index">
            <div style="text-align:center">
              <img :src="item.pic">
              <h3>{{item.info}}</h3>
            </div>
          </Card>
        </div>
        <Page :total="22" :page-size="12" show-total show-elevator/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      photo:  require('../../../assets/images/banner.jpg'),
      itemList: [
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        },
        {
          pic: require('../../../assets/images/banner.jpg'),
          info: '这里是内容，此处省略N个字...'
        }
      ],
      formValidate: {
        name: '',
        city: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
<style lang="less">
.item-html {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .item-box {
    width: 1080px;
    padding: 16px;
    height: 850px;
    margin-bottom: 20px;
    .item-desc {
      display: flex;
      flex-wrap: wrap-reverse;
      img {
        width: 170px;
        height: 100px;
      }
    }
  }
  &:last-child{
    margin-bottom: 20px;
  }
}
</style>
