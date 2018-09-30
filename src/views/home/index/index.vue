<template>
  <div>
    <div class="banner">
      <Carousel autoplay v-model="carousel" dots="none" arrow="never">
          <CarouselItem>
              <div class="demo-carousel" :style="banner">
              </div>
          </CarouselItem>
      </Carousel>
    </div>
    <div class="about">
      <div class="about-main">
        <Divider dashed><label class="Atext shake-rotate shake-constant shake-constant--hover">关于我</label><Divider type="vertical" />About me</Divider>
        <div class="about-box">
          <div class="about-top">
            <p>忽然发觉，在这个世界上，最珍贵的东西都是免费的。阳光空气亲情友情爱情目标，还有信念，还有希望，还有意志梦想所有这一切，都是免费的，只要你想要，你就能得到。还有春风，还有细雨，还有皎洁的月光灿烂的星辉世间多少滋润心灵的美好风物，都是免费的啊！
            我们一直以为最艰难的总是当下，却发现人生从来不曾有最艰难，只会有更艰难。唯一还值得庆幸的是，所有打不倒你的都将使你变得更强大，所有打倒了你的也并没将你彻底击垮。风是无常的，人，也是无常的，我的忙碌，也是无常，世事无常。</p>
          </div>
          <div class="about-bottom">
            <div class="inbox">
              <div class="about-bottom-box" v-for="item in about" :key="item.index">
                <div class="center-box">
                  <img :src="item.pic">
                  <p>{{item.desc}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="more-active">more&nbsp;&nbsp;
            <Icon
              type="ios-fastforward-outline"
              class="shake-horizontal shake-constant shake-constant--hover"
              style="margin-top:4px;color:#43a3fb;cursor:pointer;"
              size="34"/>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project-main">
        <Divider dashed><label class="Atext shake-rotate shake-constant shake-constant--hover">项目</label><Divider type="vertical" /><label class="Wtext">project</label></Divider>
        <div class="inbox">
          <Card class="project-box" v-for="item in project" :key="item.index">
            <div>
              <h3>{{item.title}}</h3>
              <div style="height: 130px;margin-top: 10px;" :style="item.pic">
              </div>
              <div class="project-content">
                <p>{{item.content}}</p>
              </div>
              <div class="more-box">
                <Tag color="primary">查看更多</Tag>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="skill-main">
        <Divider dashed><label class="Atext shake-rotate shake-constant shake-constant--hover">技能</label><Divider type="vertical" />Skill</Divider>
        <div class="box-layout">
          <div class="layout-left">
            <h3>我的技能</h3>
            <Divider dashed />
            <div>
              <Progress
                :percent="item.percent"
                status="active"
                style="margin-bottom: 10px;"
                v-for="item in skills"
                :key="item.index">
                  <span>{{item.name}}</span>
              </Progress>
            </div>
          </div>
          <div class="layout-right">
            <i-circle
              v-for="item in skills"
              :key="item.index"
              :size="100"
              :trail-width="4"
              :stroke-width="5"
              :percent="item.percent"
              stroke-linecap="square"
              :stroke-color="item.color"
              style="margin: 20px 30px;">
              <div class="demo-Circle-custom">
                <h3>{{item.name}}</h3>
                <span>
                    <i>{{item.percent}}%</i>
                </span>
              </div>
            </i-circle>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-main">
        <Divider dashed><label class="Atext shake-rotate shake-constant shake-constant--hover">联系我</label><Divider type="vertical" /><label class="Wtext">Contact me</label></Divider>
        <div class="inbox">
          <Card class="contact-box" v-for="item in contact" :key="item.index">
            <div>
              <img class="img" :src="item.url">
              <h4>{{item.key}}: {{item.value}}</h4>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carousel: 0,
      banner: {
        backgroundImage: 'url(' + require('../../../assets/images/banner1.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      contact: [
        {
          url: require('../../../assets/images/icon/qq.png'),
          key: 'QQ',
          value: '2425857526'
        },
        {
          url: require('../../../assets/images/icon/wechat.png'),
          key: '微信',
          value: 'tx9421hua'
        },
        {
          url: require('../../../assets/images/icon/e-mail.png'),
          key: 'E-mail',
          value: 'jgnjgmxt@163.com'
        }
      ],
      skills: [
        {
          name: 'HTML',
          percent: 75,
          color: '#43a3fb'
        },
        {
          name: 'JS',
          percent: 45,
          color: '#ff5500'
        },
        {
          name: 'CSS',
          percent: 55,
          color: '#43a3fb'
        },
        {
          name: 'VUE',
          percent: 35,
          color: '#ff5500'
        },
        {
          name: 'UI',
          percent: 95,
          color: '#43a3fb'
        },
        {
          name: '其他',
          percent: 15,
          color: 'color'
        },
      ],
      about: [
        {
          pic: require('../../../assets/images/icon/web.png'),
          desc: 'web端开发'
        },
        {
          pic: require('../../../assets/images/icon/program.png'),
          desc: '小程序开发'
        },
        {
          pic: require('../../../assets/images/icon/activity.png'),
          desc: 'h5活动开发'
        }
      ],
      project: [
        {
          title: 'XXXX项目',
          pic: {
            backgroundImage: 'url(' + require('../../../assets/images/banner1.jpg') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          content: '这里是项目描述，我也不知道有多少字，先写点字占占位，限制显示五行字，超过的用...表示，点击按钮查看更多关于该项目的信息'
        },
        {
          title: 'XXXX项目',
          pic: {
            backgroundImage: 'url(' + require('../../../assets/images/banner1.jpg') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          content: '这里是项目描述，我也不知道有多少字，先写点字占占位，限制显示五行字，超过的用...表示，点击按钮查看更多关于该项目的信息'
        },
        {
          title: 'XXXX项目',
          pic: {
            backgroundImage: 'url(' + require('../../../assets/images/banner1.jpg') + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          content: '这里是项目描述，我也不知道有多少字，先写点字占占位，限制显示五行字，超过的用...表示，点击按钮查看更多关于该项目的信息'
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less">
.demo-Circle-custom{
  & span{
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
    &:before{
        content: '';
        display: block;
        width: 50px;
        height: 1px;
        margin: 0 auto;
        background: #e0e3e6;
        position: relative;
        top: -15px;
    };
  }
  & span i{
    font-style: normal;
    color: #3f414d;
  }
}
.demo-carousel{
  height: 450px;
}
.about {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #fff;
  .about-main {
    width: 1080px;
    height: 100%;
    padding: 10px;
    .about-box {
      height: 370px;
      .about-top {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        font-size: 14px;
        line-height: 30px;
        height: 115px;
        margin: 10px 30px;
        text-indent: 2em;
      }
      .about-bottom {
        height: 180px;
        padding: 16px;
        margin: 10px 30px;
        .about-bottom-box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          text-align: center;
          width: 160px;
          height: 180px;
          margin: 10px 30px;
          .center-box {
            width: 100px;
            height: 100px;
            padding-top: 10px;
          }
        }
      }
      .more-active {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        font-size: 18px;
        line-height: 40px;
        height: 40px;
        color: #43a3fb;
      }
    }
  }
}
.project {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #6f6f6f;
  .project-main {
    width: 1080px;
    height: 100%;
    padding: 10px;
    .project-box {
      width: 260px;
      height: 330px;
      margin: 10px 30px;
      .project-content {
        padding: 10px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        font-size: 12px;
        line-height: 30px;
        text-indent: 2em;
        height: 100px;
      }
      .more-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        font-size: 18px;
        line-height: 40px;
        height: 40px;
        padding: 10px;
      }
    }
  }
}
.skill {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #fff;
  .skill-main {
    width: 1080px;
    height: 100%;
    padding: 10px;
    .box-layout {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 50px;
      height: 360px;
      .layout-left {
        width: 36%;
        height: 100%;
        padding: 20px 20px 20px 15px;
        margin-right: 20px;
        border-right: 1px solid #DBDBDB;
      }
      .layout-right {
        padding: 20px;
        width: 60%;
        height: 100%;
      }
    }
  }
}
.contact {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: #616161;
  .contact-main {
    width: 1080px;
    height: 100%;
    padding: 10px;
    .contact-box {
      width: 260px;
      margin: 20px 30px;
      text-align: center;
    }
  }
}
.inbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Atext {
  color: #2d8cf0;
}
.Wtext {
  color: #fff;
}
.img {
  width: 50px;
  height: 50px;
}
</style>
