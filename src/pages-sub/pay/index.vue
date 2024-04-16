<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '支付订单',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="head" hover-class="none" hover-stop-propagation="false">
      <view class="left-time" hover-class="none" hover-stop-propagation="false">
        支付剩余时间 23:59
      </view>
      <view class="price" hover-class="none" hover-stop-propagation="false">
        <text class="icon" selectable="false" space="false" decode="false">¥</text>
        <text selectable="false" space="false" decode="false">328</text>
      </view>
      <view class="order-info" hover-class="none" hover-stop-propagation="false">
        订单信息
        <image class="arrow" :src="arrow" lazy-load="true"></image>
      </view>
    </view>
    <view class="pay-title" hover-class="none" hover-stop-propagation="false">支付方式</view>
    <view class="method" hover-class="none" hover-stop-propagation="false">
      <image class="wxpay" :src="wxpay" lazy-load="false"></image>
      <view class="text">微信支付</view>
      <image class="select-icon" :src="payselect"></image>
    </view>
    <view class="foot">
      <button class="save">微信支付 ¥328</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import arrow from '../../static/images/pub/arrow.png'
import wxpay from '../../static/images/pub/wxpay.png'
import payselect from '../../static/images/pub/payselect.png'
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.head {
  width: 750rpx;
  height: 320rpx;
  background: #fff;
  border-radius: 0rpx 0rpx 24rpx 24rpx;
}

.left-time {
  width: 100%;
  margin-top: 64rpx;
  font-size: 30rpx;
  font-style: normal;
  font-weight: 400;
  color: #5a5a5a;
  text-align: center;
  text-transform: none;
}

.price {
  margin-top: 24rpx;
  font-size: 48rpx;
  font-style: normal;
  font-weight: bold;
  color: #ff4600;
  text-align: justified;
  text-align: center;
  text-transform: none;
}

.icon {
  display: inline;
  margin-right: 10rpx;
  font-size: 32rpx;
}

.order-info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 24rpx;
  font-size: 26rpx;
  font-style: normal;
  font-weight: 400;
  color: #5a5a5a;
  text-transform: none;
}

.arrow {
  width: 32rpx;
  height: 32rpx;
  margin-left: 8rpx;
}

.pay-title {
  width: 104rpx;
  height: 34rpx;
  margin-top: 56rpx;
  margin-left: 40rpx;
  font-size: 26rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 30rpx;
  color: #000;
  text-align: left;
  text-transform: none;
}

.method {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 710rpx;
  height: 118rpx;
  padding: 0 20rpx;
  margin-top: 24rpx;
  margin-left: 20rpx;
  background: #fff;
  border-radius: 16rpx;
}

.wxpay {
  width: 56rpx;
  height: 56rpx;
}

.text {
  width: 104rpx;
  height: 34rpx;
  margin-left: 24rpx;
  font-size: 26rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 30rpx;
  color: #000;
  text-align: left;
  text-transform: none;
}

.select-icon {
  width: 44rpx;
  height: 44rpx;
  margin-left: 442rpx;
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
