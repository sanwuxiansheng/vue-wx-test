<template>
  <div class="search_outer">
    <div class="search_hearder">
      <input class="search_input" type="text" placeholder="书中自有颜如玉" placeholder-class="placeholder" v-model="searchText" @confirm="searchHandle"/>
      <span class="clear" @click="searchText=''" v-show="isShow"> X </span>
    </div>
    <div class="book_list" v-if="books.length">
      <p>一共搜索到了{{books.length}}本书籍</p>
      <BooksList :books="books" />
    </div>
  </div>
</template>
<script>
import BooksList from '../booksList/index.vue'
import request from '../../utils/request'
export default {
  // computents: {
    
  // },
  components: {
    BooksList
  },
  data () {
    return {
      searchText: '',
      isShow: false,
      books: []
    }
  },
  watch: {
    searchText() {
      this.isShow = this.searchText ? true : false
    }
  },
  methods: {
    // searchHandle(event) {
      // console.log(event.mp.detail.value);
      // console.log(this.searchText);
      // 上面两种都能获得文本框中输入的内容
      // 获取文本框中的数据,发送请求,后台接收请求的参数,根据参数查询数据,把数据进行返回
    // }
    async searchHandle() {
      let searchText = this.searchText;
      let result = await request('/searchBooks', {req: searchText})
      if (result) {
        this.books = result
        // console.log(this.books)
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.search_outer
  .search_hearder
    width 80%
    height 80rpx
    margin 10rpx auto
    border-bottom 1rpx solid #02a774
    position relative
    .search_input
      height 100%
      .placeholder
        color #02a774
        font-size 32rpx
        text-align center
    .clear
      position absolute
      right 20rpx
      top 20rpx
      z-index 99
  .book_list
    p
      margin 30rpx

</style>