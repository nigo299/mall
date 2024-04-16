<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '订单详情',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="head" hover-class="none" hover-stop-propagation="false">
      <text class="status" selectable="false" space="false" decode="false">待支付</text>
      <view class="detail-desc" selectable="false" space="false" decode="false">
        请在 23小时 59分钟 59秒内完成支付 超时系统将自动取消订单
      </view>
    </view>
    <view class="good-store" hover-class="none" hover-stop-propagation="false">
      <image class="banner" :src="test" lazy-load="true"></image>
      <view class="good-title" hover-class="none" hover-stop-propagation="false">
        <view hover-class="none" hover-stop-propagation="false">
          追剧神器全网通用超清4K可投屏安卓苹果影视APP 永久使用同步再新
        </view>
        <view class="price" hover-class="none" hover-stop-propagation="false">
          <text class="icon" selectable="false" space="false" decode="false">¥</text>
          328
        </view>
      </view>
      <view class="line" hover-class="none" hover-stop-propagation="false"></view>
      <view class="del-wrap" hover-class="none" hover-stop-propagation="false">
        <button class="del-btn">删除订单</button>
        <view class="count-wrap" hover-class="none" hover-stop-propagation="false">
          需付款:
          <text class="pay-price">
            <text class="pay-icon" selectable="false" space="false" decode="false">¥</text>
            328
          </text>
        </view>
      </view>
    </view>
    <view class="order-info" hover-class="none" hover-stop-propagation="false">
      <view class="info-title" hover-class="none" hover-stop-propagation="false">订单信息</view>
      <view class="list-wrap" hover-class="none" hover-stop-propagation="false">
        <view class="listitem" hover-class="none" hover-stop-propagation="false">
          <text class="list-title" hover-class="none" hover-stop-propagation="false">
            订单编号:
          </text>
          <text class="list-content" selectable="false" space="false" decode="false">
            2106096034704238538
          </text>
          <text class="copy" space="false" decode="false" @click="clip">复制</text>
        </view>
        <view class="listitem" hover-class="none" hover-stop-propagation="false">
          <text class="list-title" hover-class="none" hover-stop-propagation="false">
            支付方式:
          </text>
          <text class="list-content" selectable="false" space="false" decode="false">微信支付</text>
        </view>
        <view class="listitem" hover-class="none" hover-stop-propagation="false">
          <text class="list-title" hover-class="none" hover-stop-propagation="false">
            发货方式:
          </text>
          <text class="list-content" selectable="false" space="false" decode="false">
            下单后系统自动发货
          </text>
        </view>
        <view class="listitem" hover-class="none" hover-stop-propagation="false">
          <text class="list-title" hover-class="none" hover-stop-propagation="false">
            下单时间:
          </text>
          <text class="list-content" selectable="false" space="false" decode="false">
            2024-03-20 16:03:7
          </text>
        </view>
        <view class="listitem" hover-class="none" hover-stop-propagation="false">
          <text class="list-title" hover-class="none" hover-stop-propagation="false">
            发货时间:
          </text>
          <text class="list-content" selectable="false" space="false" decode="false">
            2024-03-20 16:03:7
          </text>
        </view>
      </view>
    </view>
    <view class="foot">
      <view class="total" hover-class="none" hover-stop-propagation="false">
        合计:
        <text class="total-price" selectable="false" space="false" decode="false">¥ 328</text>
      </view>
      <button class="save">立即支付</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import test from '../../static/images/home/testt.png'

const clip = () => {
  uni.setClipboardData({
    data: '需要复制的文本',
  })
}
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  background: #f5f5f5;
}

.head {
  box-sizing: border-box;
  width: 750rpx;
  height: 272rpx;
  padding: 16rpx 24rpx;
  background: linear-gradient(36deg, #2393ff 3%, #6fc9fe 100%);
}

.status {
  width: 120rpx;
  height: 52rpx;
  font-size: 40rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 47rpx;
  color: #fff;
  text-align: left;
  text-transform: none;
}

.detail-desc {
  height: 64rpx;
  font-size: 24rpx;
  font-style: norm al;
  font-weight: 400;
  line-height: 28rpx;
  color: rgb(255 255 255 / 80%);
  text-align: left;
  text-transform: none;
}

.good-store {
  position: absolute;
  top: 192rpx;
  left: 20rpx;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 710rpx;
  height: 376rpx;
  padding: 40rpx 20rpx;
  background: #fff;
  border-radius: 16rpx;
}

.banner {
  width: 172rpx;
  height: 172rpx;
}

.good-title {
  width: 482rpx;
  margin-top: 6rpx;
  margin-left: 18rpx;
  font-size: 26rpx;
  font-style: narmal;
  font-weight: 500;
  line-height: 30rpx;
  color: #40434a;
  text-align: justified;
  text-transform: none;
}

.price {
  width: 78rpx;
  height: 36rpx;
  margin-top: 64rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 28rpx;
  color: #282828;
  text-align: justified;
  text-transform: none;
}

.icon {
  font-size: 24rpx;
}

.line {
  width: 670rpx;
  height: 0rpx;
  margin-top: 40rpx;
  border: 2rpx solid #f4f4f4;
}

.del-btn {
  position: absolute;
  bottom: 4rpx;
  left: 0;
  width: 176rpx;
  height: 52rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 52rpx;
  color: #b1b2b4;
  text-transform: none;
  border: 2rpx solid #ededed;
  border-radius: 32rpx;
}

.del-wrap {
  position: relative;
  width: 100%;
  height: 60rpx;
  margin-top: 36rpx;
}

.count-wrap {
  position: absolute;
  right: 0;
  bottom: 10rpx;
  width: 200rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #696d76;
  text-transform: none;
}

.pay-price {
  font-size: 32rpx;
  font-style: normal;
  font-weight: 500;
  color: #ff4600;
  text-transform: none;
}

.pay-icon {
  font-size: 24rpx;
}

.order-info {
  position: absolute;
  bottom: 492rpx;
  left: 20rpx;
  box-sizing: border-box;
  width: 710rpx;
  height: 368rpx;
  padding: 28rpx 20rpx;
  background: #fff;
  border-radius: 16rpx;
}

.info-title {
  width: 112rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #151515;
  text-align: justified;
  text-transform: none;
}

.list-wrap {
  margin-top: 32rpx;
}

.list-title {
  width: 120rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #888;
  text-align: justified;
  text-transform: none;
}

.list-content {
  height: 32rpx;
  margin: 0 28rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #1d1c1c;
  text-align: justified;
  text-transform: none;
}

.copy {
  width: 76rpx;
  height: 40rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #3858fd;
  text-align: right;
  text-transform: none;
  background: rgb(56 88 253 / 5%);
  border-radius: 16rpx;
}

.listitem {
  margin-top: 10rpx;
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

.save {
  position: absolute;
  top: 24rpx;
  right: 24rpx;
  width: 232rpx;
  height: 76rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 68rpx;
  color: #fff;
  text-align: center;
  text-transform: none;
  background: #36a3ff;
  border: 2rpx solid #2494ff;
  border-radius: 60rpx;
}

.total {
  position: absolute;
  top: 44rpx;
  left: 276rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: dnormal;
  font-weight: 500;
  line-height: 33rpx;
  color: #696d76;
  text-align: justified;
  text-transform: none;
}

.total-price {
  font-size: 34rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 40rpx;
  color: #282828;
  text-align: justified;
  text-transform: none;
}
</style>
