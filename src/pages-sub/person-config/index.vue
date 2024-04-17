<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '设置',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="listitem" @click="gotoPage('user-info/index')">
      <view class="itemwrap">
        <image class="navicon" :src="note"></image>
        <view class="item-text">商家资料填写</view>
      </view>
      <image class="arrow" :src="arrow"></image>
    </view>
    <view class="listitem">
      <view class="itemwrap">
        <image class="navicon" :src="person"></image>
        <view class="item-text">切换账号</view>
      </view>
      <image class="arrow" :src="arrow"></image>
    </view>
    <view class="quitbtn">
      <image class="quit" :src="quit"></image>
      退出登录
    </view>
  </view>
</template>

<script lang="ts" setup>
import arrow from '../../static/images/mine/arrow.png'
import note from '../../static/images/mine/note.png'
import person from '../../static/images/mine/person.png'
import quit from '../../static/images/mine/quit.png'

const gotoPage = (page: string) => {
  uni.navigateTo({
    url: `/pages-sub/${page}`,
  })
}
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  background: #f5f5f5;
}

.listitem {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 104rpx;
  padding: 0 28rpx;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.itemwrap {
  display: flex;
  align-items: center;
}

.navicon {
  width: 40rpx;
  height: 40rpx;
}

.item-text {
  margin-left: 16rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  color: #333;
  text-align: justified;
  text-transform: none;
}

.arrow {
  width: 40rpx;
  height: 40rpx;
}

.quitbtn {
  box-sizing: border-box;
  width: 250rpx;
  height: 80rpx;
  padding: 20rpx 48rpx;
  margin: 72rpx auto;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  color: #333;
  text-align: justified;
  text-transform: none;
  background: #fff;
  border-radius: 72rpx;
}

.quit {
  width: 32rpx;
  height: 32rpx;
  margin-right: 10rpx;
}
</style>
