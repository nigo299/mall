<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>

<template>
  <view class="bg-white overflow-hidden pt-2 px-3">
    <wd-swiper
      :indicator="{ type: 'dots-bar' } as any"
      :list="swiperList"
      autoplay
      :current="0"
      @click="handleClick"
      @change="onChange"
    ></wd-swiper>
  </view>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])
const tabbar = ref(0)

function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}

console.log(PLATFORM)

const gotoPage = (page: string) => {
  uni.navigateTo({
    url: `/pages/index/${page}`,
  })
}
</script>

<style lang="scss" scoped>
.tab-bar {
  margin-top: 500rpx;
}
</style>
