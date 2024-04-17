<route lang="json5">
{
  style: {
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view class="" hover-class="none" hover-stop-propagation="false">
    <image class="banner" :src="banner"></image>
    <view class="content">主体</view>
  </view>
  <tab-bar :active="4"></tab-bar>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import banner from '../../static/images/mine/banner.png'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

console.log(PLATFORM)

const gotoPage = (page: string) => {
  uni.navigateTo({
    url: `/pages/index/${page}`,
  })
}
</script>

<style lang="scss" scoped>
.banner {
  width: 750rpx;
  height: 394rpx;
  margin-top: -80rpx;
}

.content {
  position: fixed;
  top: 230rpx;
  width: 750rpx;
  height: 1350rpx;
  background: #fff;
  border: 1px solid red;
  border-radius: 28rpx 28rpx 0rpx 0rpx;
}
</style>
