<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '商品详情',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="head" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="testt" lazy-load="false"></image>
      <view class="price" hover-class="none" hover-stop-propagation="false">
        <text class="priceicon" selectable="false" space="false" decode="false">¥</text>
        <text class="num" selectable="false" space="false" decode="false">328</text>
        <view class="title" hover-class="none" hover-stop-propagation="false">
          追剧神器全网通用超清4K可投 屏安卓苹果影视APP永久使用 同步再新
        </view>
      </view>
    </view>
    <view class="detail" hover-class="none" hover-stop-propagation="false">
      <view class="detail-title" hover-class="none" hover-stop-propagation="false">商品详情</view>
      <image class="banner" :src="testt" lazy-load="false"></image>
      <image class="banner" :src="testt" lazy-load="false"></image>
      <image class="banner" :src="testt" lazy-load="false"></image>
      <image class="banner" :src="testt" lazy-load="false"></image>
    </view>
    <view class="foot">
      <button class="save">立即购买</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import testt from '../../static/images/home/testt.png'
onLoad((query) => {
  console.log('query', query)
})
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  background-color: #f4f4f4;
}

.banner {
  width: 750rpx;
  height: 750rpx;
}

.price {
  padding: 20rpx;
}

.priceicon {
  margin-right: 4rpx;
  font-size: 24rpx;
  color: #f6220d;
}

.num {
  font-size: 48rpx;
  color: #f6220d;
}

.head {
  background-color: #fff;
}

.title {
  display: -webkit-box;
  width: 716rpx;
  height: 84rpx;
  margin-top: 12rpx;
  overflow: hidden;
  font-size: 32rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 38rpx;
  color: #40434a;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: none;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.detail {
  padding-top: 16rpx;
  margin-top: 16rpx;
  background-color: #fff;
}

.detail-title {
  width: 128rpx;
  height: 44rpx;
  margin-bottom: 20rpx;
  margin-left: 32rpx;
  font-size: 32rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 44rpx;
  color: #40434a;
  text-align: left;
  text-transform: none;
}

.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 166rpx;
  padding: 28rpx 32rpx;
  background-color: #fff;
  border: 2rpx solid #fff;
}

.wrap {
  padding-bottom: 200rpx;
}

.save {
  width: 694rpx;
  height: 68rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 68rpx;
  color: #fff;
  text-align: center;
  text-transform: none;
  background: #2494ff;
  border: 2rpx solid #2494ff;
  border-radius: 160rpx;
}
</style>
