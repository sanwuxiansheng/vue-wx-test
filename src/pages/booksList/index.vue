<template>
<div class="bookListContainer">
  <ul>
    <li v-for="(book, index) in books" :key="index" @click="toDetail(book)">
      <img :src="book.image" alt="">
      <div class="book_content">
        <p>{{book.length}}</p>
        <p>{{book.author}}</p>
        <p>{{book.publisher}}</p>
      </div>
      <p class="book_price">{{book.price}}</p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  props: ["books"],
  data () {
    return {
      books:[]
    }
  },
  mounted () {
    // console.log(this.books)
    // 获取数据
    if (this.$mp) {
      this.books = JSON.parse(this.$mp.query.books)
    }
    // console.log(this.books);
  },
  methods: {
    toDetail(book) {
      wx.navigateTo({
        url: '/pages/detail/main?book='+JSON.stringify(book)
      })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.bookListContainer
  li
    display flex
    padding 10rpx
    border-bottom 1rpx solid #eeeeee
    img 
      width 140rpx
      height 140rpx
      margin-right 20rpx
  .book_content
    width 60%
    p
      font-size 32rpx
  .book_price
    font-size 36rpx
    font-weight 800
    color red
</style>