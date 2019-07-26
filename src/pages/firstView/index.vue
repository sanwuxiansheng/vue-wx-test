<template>
<div class="firstViewContainer">
  <swiper :indicator-dots = "current !== 3" @change="changHandle">
    <swiper-item>
      <img src="/static/imgs/firstView/1.jpg" alt="" />
    </swiper-item>
    <swiper-item>
      <img src="/static/imgs/firstView/2.jpg" alt="" />
    </swiper-item>
    <swiper-item>
      <img src="/static/imgs/firstView/3.jpg" alt="" />
    </swiper-item>
    <swiper-item>
      <img src="/static/imgs/firstView/nvsheng.jpg" alt="" />
    </swiper-item>
  </swiper>
  <button v-if="isShow" @click="toBooks">开始体验</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false, // 按钮是否显示--默认不显示
      current: 0 // 表示轮播图的索引值
    }
  },
  methods: {
    changHandle (event) {
      this.current = event.mp.detail.current;
    },
    toBooks () {
      wx.navigateTo({
        url: '/pages/books/main'
      })
    }
  },
  watch: {
    current() {
      this.isShow = this.current === 3 ? true : false;
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.firstViewContainer
  width 100%
  height 100%
  swiper 
    width 100%
    height 100%
    img 
      width 100%
      height 100%
  button 
    width 280rpx
    height 80rpx
    background rgba(0, 0, 0, 0.5)
    color #eee
    text-align center
    line-height 80rpx
    font-size 40rpx
    position absolute
    left 50%
    margin-left -140rpx
    bottom 30rpx
</style>