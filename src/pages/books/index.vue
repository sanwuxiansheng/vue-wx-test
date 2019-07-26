<template>
<div class="booksContainer">
    <swiper :indicator-dots="current!==3" @change="swiperHandle">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt />
      </swiper-item>
    </swiper>
    <div class="books_list_container">
      <div class="books_header">
        <span>全部商品</span>
        <span @click="tobookList(bookList)" class="go_right">></span>
      </div>
      <ul class="books_list">
        <li v-for="(book,index) in bookList" :key="index" @click="toDetail(book)">
          <img :src="book.image" alt />
          <p>《{{book.author}}》</p>
          <p>书名:{{book.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import datas from './datas/data.json'
export default {
  data () {
    return {
      bookList:[]
    }
  },
  mounted () {
   // 更新数据状态,从data.json文件中读取数据,返回的是数组 
    this.bookList=datas
  },
  methods: {
    // 点击 > 跳转到书籍列表页,需要传入参数:bookList--->所有的图书
    tobookList(bookList){
      wx.navigateTo({
        url: '/pages/booksList/main?books='+JSON.stringify(bookList)
      })
    },
    toDetail(book) {
      wx.navigateTo({
        url: '/pages/detail/main?book='+JSON.stringify(book)
      })
    }
    // tobookList(bookList) {
    //   console.log(bookList);
    // }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.booksContainer
  swiper
    width 100%
    height 400rpx
    img
      width 100%
      height 100%
  .books_list_container
    .books_header
      span
        font-size 40rpx
        margin 10rpx
        &.go_right
          float right
          color rgb(0, 200, 0)
    .books_list
      display flex
      flex-wrap wrap
      li
        width 50%
        box-sizing border-box
        text-align center
        border-bottom 1rpx solid #eee
        &:nth-child(2n+1)
          border-right 1rpx solid #eee
        img
          width 200rpx
          height 200rpx
          margin 20rpx 0
        p
          font-size 28rpx
          line-height 46rpx
</style>