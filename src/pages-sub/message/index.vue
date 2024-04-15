<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '消息' },
}
</route>

<template>
  <view class="wrap">
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <view class="title" hover-class="none" hover-stop-propagation="false">1.0版本持续上线</view>
      <view class="text" hover-class="none" hover-stop-propagation="false">
        尊敬的商家用户，我们的1.0版本已经上线了，平台支持用户的反馈及建议，感谢您的配合>>
      </view>
      <view class="time" hover-class="none" hover-stop-propagation="false">2分钟前</view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <view class="title" hover-class="none" hover-stop-propagation="false">1.0版本持续上线</view>
      <view class="text" hover-class="none" hover-stop-propagation="false">
        尊敬的商家用户，我们的1.0版本已经上线了，平台支持用户的反馈及建议，感谢您的配合>>
      </view>
      <view class="time" hover-class="none" hover-stop-propagation="false">2分钟前</view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <view class="title" hover-class="none" hover-stop-propagation="false">1.0版本持续上线</view>
      <view class="text" hover-class="none" hover-stop-propagation="false">
        尊敬的商家用户，我们的1.0版本已经上线了，平台支持用户的反馈及建议，感谢您的配合>>
      </view>
      <view class="time" hover-class="none" hover-stop-propagation="false">2分钟前</view>
    </view>
    <view class="listitem" hover-class="none" hover-stop-propagation="false">
      <view class="title" hover-class="none" hover-stop-propagation="false">1.0版本持续上线</view>
      <view class="text" hover-class="none" hover-stop-propagation="false">
        尊敬的商家用户，我们的1.0版本已经上线了，平台支持用户的反馈及建议，感谢您的配合>>
      </view>
      <view class="time" hover-class="none" hover-stop-propagation="false">2分钟前</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// code here
</script>

<style lang="scss" scoped>
// here is scoped style
.wrap {
  height: 100vh;
  padding: 32rpx;
  background-color: #f4f4f4;
}

.listitem {
  box-sizing: border-box;
  width: 686rpx;
  height: 276rpx;
  padding: 32rpx;
  margin-bottom: 32rpx;
  background: #fff;
  border-radius: 16rpx;
}

.title {
  width: 236rpx;
  height: 48rpx;
  font-size: 32rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 48rpx;
  color: #000;
  text-align: center;
  text-transform: none;
}

.text {
  display: -webkit-box;
  width: 616rpx;
  height: 72rpx;
  margin-top: 16rpx;
  overflow: hidden;
  font-size: 26rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 36rpx;
  color: #7b7a7a;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.time {
  width: 88rpx;
  height: 32rpx;
  margin-top: 44rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 32rpx;
  color: #9b9ea6;
  text-align: center;
  text-transform: none;
}
</style>
