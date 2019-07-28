<template>
<div class="detailContainer">
    <p class="book_name">{{book.title}}</p>
    <img :src="book.image" alt />
    <div class="book_info">
      <span>{{book.author}}</span>
      <span>{{book.publisher}}</span>
      <span>{{book.pubdate}}</span>
      <span>{{book.price}}</span>
    </div>
    <button @click="isCollect">{{text}}</button>
    <article class="book_">
      <h1>作者简介</h1>
      <section>{{book.author_intro}}</section>
    </article>
    <article class="book_">
      <h1>书籍简介</h1>
      <section>{{book.summary}}</section>
    </article>
  </div>
</template>
<script>
export default {
  data () {
    return {
      book: {},
      index: null,
      isShow: false,
      text: '收藏',
      obj: {}
    }
  },
  mounted () {
    // 获取传入的参数
    if (this.$mp) {
      // console.log(this.$mp)
      this.book = JSON.parse(this.$mp.query.book)
      this.index = this.book.title
      // console.log(this.book);
    }
    // console.log(this.index);
    let storage = wx.getStorageSync('isShow')
    if (storage[this.index]) {
      this.isShow = true
    } else {
      this.isShow = false
    }
    if (this.isShow) {
      this.text = '已收藏'
    } else{
      this.text = '收藏'
    }
  },
  methods: {
    isCollect() {
      this.isShow = ! this.isShow
      if (this.isShow) {
        this.text = '已收藏'
      } else{
        this.text = '收藏'
      }
      // 用户提示信息
      let title = this.isShow ? '收藏成功' : '取消收藏'
      wx.showToast({
        title
      });
      // 缓存数据
      let isShow = this.isShow
      let obj 
      if (wx.getStorageSync('isShow')) {
        obj = wx.getStorageSync('isShow')
      }else{
        obj = {}
      }
      let index = this.index
      obj[index] = isShow
      wx.setStorage({
        key: 'isShow',
        data: obj
      });
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.detailContainer
  display flex
  flex-direction column
  .book_name
    font-size 40rpx
    font-weight 700
    text-align center
    line-height 80rpx
  img
    width 70%
    height 700rpx
    margin 20rpx auto
  .book_info
    display flex
    flex-direction column
    font-size 32rpx
    width 100%
    padding-left 15%
  button
    width 300rpx
    height 60rpx
    font-size 32rpx
    line-height 60rpx
    margin 20rpx auto
  article
    width 100%
    padding 10%
    box-sizing border-box
    h1
      text-align center
      color #02a774
      font-weight 700
    section
      font-size 34rpx
      text-indent 34rpx
</style>
