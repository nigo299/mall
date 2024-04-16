<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '礼品' },
}
</route>

<template>
  <view class="wrap">
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="test" lazy-load="false"></image>
      <view class="title" hover-class="none" hover-stop-propagation="false">
        追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投
        屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用
        同步再新
      </view>
      <view class="price" hover-class="none" hover-stop-propagation="false">¥328</view>
      <view class="typelesson" hover-class="none" hover-stop-propagation="false">
        <wd-icon name="books" size="12px"></wd-icon>
        软件类
      </view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="test" lazy-load="false"></image>
      <view class="title" hover-class="none" hover-stop-propagation="false">
        追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投
        屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用
        同步再新
      </view>
      <view class="price" hover-class="none" hover-stop-propagation="false">¥328</view>
      <view class="type" hover-class="none" hover-stop-propagation="false">
        <wd-icon name="phone" size="12px"></wd-icon>
        软件类
      </view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="test" lazy-load="false"></image>
      <view class="title" hover-class="none" hover-stop-propagation="false">
        追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投
        屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用
        同步再新
      </view>
      <view class="price" hover-class="none" hover-stop-propagation="false">¥328</view>
      <view class="type" hover-class="none" hover-stop-propagation="false">
        <wd-icon name="phone" size="12px"></wd-icon>
        软件类
      </view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="test" lazy-load="false"></image>
      <view class="title" hover-class="none" hover-stop-propagation="false">
        追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投
        屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用
        同步再新
      </view>
      <view class="price" hover-class="none" hover-stop-propagation="false">¥328</view>
      <view class="type" hover-class="none" hover-stop-propagation="false">
        <wd-icon name="phone" size="12px"></wd-icon>
        软件类
      </view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="test" lazy-load="false"></image>
      <view class="title" hover-class="none" hover-stop-propagation="false">
        追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投
        屏安卓苹果影视APP永久使用 同步再新 追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用
        同步再新
      </view>
      <view class="price" hover-class="none" hover-stop-propagation="false">¥328</view>
      <view class="type" hover-class="none" hover-stop-propagation="false">
        <wd-icon name="phone" size="12px"></wd-icon>
        软件类
      </view>
    </view>
    <tab-bar :active="1"></tab-bar>
  </view>
</template>

<script lang="ts" setup>
import test from '../../static/images/photo/test.png'
// code here
</script>

<style lang="scss" scoped>
// here is scoped style
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 90vh;
  padding: 24rpx;
  background-color: #f4f4f4;
}

.listitem {
  position: relative;
  box-sizing: border-box;
  width: 346rpx;
  height: 546rpx;
  margin-bottom: 10rpx;
  background: #fff;
  border-radius: 8rpx;
}

.banner {
  width: 346rpx;
  height: 346rpx;
}

.title {
  // position: absolute;
  // top: 6rpx;
  // right: 32rpx;
  display: -webkit-box;
  width: 306rpx;
  height: 72rpx;
  margin-top: 16rpx;
  margin-left: 20rpx;
  overflow: hidden;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 36rpx;
  color: #40434a;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.type {
  position: absolute;
  right: 0;
  bottom: 200rpx;
  width: 118rpx;
  height: 40rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  text-align: justified;
  text-align: center;
  text-transform: none;
  background: #22bb28;
  border-radius: 12rpx 0rpx 0rpx;
}

.typelesson {
  position: absolute;
  right: 0;
  bottom: 200rpx;
  width: 118rpx;
  height: 40rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  text-align: justified;
  text-align: center;
  text-transform: none;
  background: #e2a300;
  border-radius: 12rpx 0rpx 0rpx;
}

.price {
  width: 86rpx;
  height: 42rpx;
  margin-top: 50rpx;
  margin-left: 20rpx;
  font-size: 32rpx;
  font-style: normal;
  font-weight: bold;
  line-height: 38rpx;
  color: #ea2b20;
  text-align: left;
  text-transform: none;
}
</style>
