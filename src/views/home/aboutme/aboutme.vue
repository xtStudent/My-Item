<template>
  <div style="background-color: #fff;">
    <div class="intro-inner">
      <div class="intro-box">
        <img :src="photo">
        <div class="content">
          <p>我们自古以来，就有埋头苦干的人，有拼命硬干的人，有为民请命的人，有舍身求法的人...这就是中国的脊梁。——鲁迅 ​​​​</p>
          <p>人生不过如此，且行且珍惜。自己永远是自己的主角，不要总在别人的戏剧里充当着配角。——林语堂 ​​​​</p>
          <p>读书到最后，是为了让我们更宽容地去理解这个世界有多复杂。—— 梁文道</p>
          <p>“我竭我的至诚恳求你们不要错走路，不要惶惑，不要忘记你们的天职，千成不要理会那恶俗的力量的引诱，诞妄的巨体的叫唤，拥积的时尚与无意识，无目的的营利的诱惑。”——泰戈尔 ​​​​</p>
          <p>故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，增益其所不能。——孟轲</p>
          <p>将帅的坚强意志，就像城市主要街道汇集点上的方尖碑一样，在军事艺术中占有十分突出的地位。——克劳塞维茨</p>
          <p>最明亮的欢乐火焰大概都是由意外的火花点燃的。人生道路上不时散发出芳香的花朵，也是从偶然落下的种子自然生长起来的。——塞缪尔·约翰逊</p>
          <p>在人生的黄昏时，一代不幸的人在摸索徘徊：一些人在斗争中死去;一些人堕入深渊;种种机缘，希望和仇恨冲击着那些被偏见束缚着的人;在那黑暗泥泞的道路上同样也走着那些给人点亮灯光的人，每一个头上举着火种的人尽管没有人承认他的价值，但他总是默默地生活着劳动着，然后像影子一样消失。——普鲁斯</p>
          <p>真诚的、十分理智的友谊是人生的无价之宝。你能否对你的朋友守信不渝，永远做一个无愧于他的人，这就是你的灵魂、性格、心理以至于道德的最好的考验。——马克思</p>
          <p>舆论虽有令人生畏的力量，但它是由一群无知的自鸣得意的傻瓜营造出来的。我认识几百个记者，其中大多数的个人见解并不值钱，但当他们报纸上说话时，那就成了报纸的意见，于是，他们的话也就成了震憾社会的雷鸣般的预言。——马克吐温</p>
        </div>
        <Divider />
      </div>
    </div>
    <div class="item-html">
      <div class="html-box">
        <Alert banner>HTML</Alert>
        <div class="html-desc"></div>
      </div>
    </div>
    <div class="item-html">
      <div class="html-box">
        <Alert banner>CSS</Alert>
        <div class="html-desc"></div>
      </div>
    </div>
    <div class="item-html">
      <div class="html-box">
        <Alert banner>JS</Alert>
        <div class="html-desc"></div>
      </div>
    </div>
    <div class="item-html">
      <div class="html-box">
        <Alert banner>VUE</Alert>
        <div class="html-desc"></div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  data () {
    return {
      photo:  require('../../../assets/images/yell.jpg')
    }
  },
  methods: {

  }
}
</script>
<style lang="less">
.intro-inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .intro-box {
    width: 1080px;
    height: 450px;
    padding: 16px;
    overflow: hidden;
    img {
      width: 300px;
      height: auto;
      float:left;
      margin: 10px;
    }
    & .content {
      text-indent: 2em;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
.item-html {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .html-box {
    width: 1080px;
    height: 300px;
    padding: 16px;
    .html-desc {
      border: 1px solid #eaeaea;
      height: 250px;
    }
  }
}
</style>
