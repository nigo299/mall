<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '发布',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="head-title" hover-class="none" hover-stop-propagation="false">选择产品</view>
    <view class="btn-wrap" hover-class="none" hover-stop-propagation="false">
      <text class="btn">韩式炸鸡</text>
      <text class="btn">猪脚饭</text>
      <text class="btn">热辣酸菜鱼</text>
    </view>
    <view class="mid-title" hover-class="none" hover-stop-propagation="false">好评点</view>
    <view class="btn-wrap" hover-class="none" hover-stop-propagation="false">
      <text class="btn">店铺干净</text>
      <text class="btn">口味好</text>
      <text class="btn">性价比高</text>
      <text class="btn">服务好</text>
      <text class="btn">老板亲切</text>
      <text class="btn">奇特的一次体验</text>
    </view>
    <view class="bot-title" hover-class="none" hover-stop-propagation="false">
      好评维度（用逗号分隔）
    </view>
    <view class="text-container" hover-class="none" hover-stop-propagation="false">
      <wd-textarea v-model="inputVal" placeholder="如：停车方便，上菜快，服务好" />
    </view>
    <button class="sub-btn" @click="gotoPage('ai-generate/index')">生成(剩余44次)</button>
  </view>

  <tab-bar :active="3"></tab-bar>
</template>

<script lang="ts" setup>
const inputVal = ref<string>('')
const gotoPage = (page: string) => {
  uni.navigateTo({
    url: `/pages-sub/${page}`,
  })
}
</script>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
  width: 750rpx;
  min-height: 1660rpx;
  padding: 40rpx 32rpx;
  background: #f4f4f4;
  border-radius: 0rpx;
}

.head-title {
  width: 112rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #2f2f2f;
  text-align: left;
  text-transform: none;
}

.mid-title {
  width: 112rpx;
  height: 36rpx;
  margin-top: 56rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #2f2f2f;
  text-align: left;
  text-transform: none;
}

.bot-title {
  height: 36rpx;
  margin-top: 46rpx;
  margin-bottom: 30rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #2f2f2f;
  text-align: left;
  text-transform: none;
}

.btn-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: 34rpx;
}

.btn {
  box-sizing: border-box;
  width: auto;
  height: 68rpx;
  padding: 16rpx 24rpx;
  margin-top: 16rpx;
  margin-right: 12rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 33rpx;
  color: #333;
  text-align: center;
  text-transform: none;
  border: 2rpx solid #afb3c7;
  border-radius: 68rpx;
}

.text-container {
  width: 686rpx;
  height: 310rpx;
  overflow: hidden;
  background: #fff;
  border-radius: 16rpx;
}

.sub-btn {
  width: 682rpx;
  height: 84rpx;
  margin-top: 40rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 84rpx;
  color: #fff;
  text-align: center;
  text-transform: none;
  background: #36a3ff;
  border-radius: 16rpx;
}
</style>
