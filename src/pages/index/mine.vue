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
    <view class="content">
      <image class="avatar" :src="avatar"></image>
      <view class="name">罗大虾(海昌路)店</view>
      <view class="address">天府大道华阳街道65号</view>
      <image class="icon" :src="icon"></image>
      <!-- <view class="vipbanner">
        <image class="vip" :src="vipbanner"></image>
        <image class="diamond" :src="diamond"></image>
        <image class="viptext" :src="viptext"></image>
        <view class="text">尊享7大权益</view>
        <view class="open">立即开通</view>
      </view> -->
      <!-- <view class="vipbanner">
        <image class="vip" :src="vipbanner"></image>
        <image class="diamond" :src="diamond"></image>
        <image class="viptext1" :src="viptext"></image>
        <view class="text1">有效期截止: 2024/12/16</view>
        <view class="open">续费</view>
      </view> -->
      <view class="vipbanner">
        <image class="vip" :src="vipbanner"></image>
        <image class="diamond" :src="diamond"></image>
        <image class="viptext1" :src="viptext"></image>
        <view class="text1">终生会员</view>
        <view class="open">查看权益</view>
      </view>
      <view class="navbanner">
        <view class="nav-left">
          <image class="code" :src="code"></image>
          <view class="nav-text">商家二维码生成</view>
          <image class="codebg" :src="codebg"></image>
        </view>
        <view class="nav-right">
          <image class="code" :src="order"></image>
          <view class="nav-text">订单列表</view>
          <image class="orderbg" :src="orderbg"></image>
        </view>
      </view>
      <view class="listitem">
        <view class="itemwrap">
          <image class="navicon" :src="sharewx"></image>
          <view class="item-text">分享微信好友</view>
        </view>
        <image class="arrow" :src="arrow"></image>
      </view>
      <view class="listitem">
        <view class="itemwrap">
          <image class="navicon" :src="sharegroup"></image>
          <view class="item-text">分享至朋友圈</view>
        </view>
        <image class="arrow" :src="arrow"></image>
      </view>
      <view class="listitem">
        <view class="itemwrap">
          <image class="navicon" :src="viewad"></image>
          <view class="item-text">观看广告</view>
        </view>
        <image class="arrow" :src="arrow"></image>
      </view>
      <view class="listitem">
        <view class="itemwrap">
          <image class="navicon" :src="gzh"></image>
          <view class="item-text">关注公众号</view>
        </view>
        <image class="arrow" :src="arrow"></image>
      </view>
      <view class="listitem">
        <view class="itemwrap">
          <image class="navicon" :src="chat"></image>
          <view class="item-text">联系客服</view>
        </view>
        <image class="arrow" :src="arrow"></image>
      </view>
      <view class="listitem">
        <view class="itemwrap">
          <image class="navicon" :src="about"></image>
          <view class="item-text">关于我们</view>
        </view>
        <image class="arrow" :src="arrow"></image>
      </view>
    </view>
  </view>
  <tab-bar :active="4"></tab-bar>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import banner from '../../static/images/mine/banner.png'
import avatar from '../../static/images/mine/avatar.png'
import icon from '../../static/images/mine/icon.png'
import vipbanner from '../../static/images/mine/vipbanner.png'
import diamond from '../../static/images/mine/diamond.png'
import viptext from '../../static/images/mine/viptext.png'
import code from '../../static/images/mine/code.png'
import order from '../../static/images/mine/order.png'
import codebg from '../../static/images/mine/codebg.png'
import orderbg from '../../static/images/mine/orderbg.png'
import sharewx from '../../static/images/mine/sharewx.png'
import arrow from '../../static/images/mine/arrow.png'
import sharegroup from '../../static/images/mine/sharegroup.png'
import viewad from '../../static/images/mine/viewad.png'
import gzh from '../../static/images/mine/gzh.png'
import chat from '../../static/images/mine/chat.png'
import about from '../../static/images/mine/about.png'

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
  border-radius: 28rpx 28rpx 0rpx 0rpx;
}

.avatar {
  position: absolute;
  top: -30rpx;
  left: 28rpx;
  width: 170rpx;
  height: 170rpx;
}

.name {
  width: 282rpx;
  height: 48rpx;
  margin-top: 36rpx;
  margin-left: 226rpx;
  font-size: 36rpx;
  font-style: normal;
  font-weight: bold;
  line-height: 42rpx;
  color: #202020;
  text-align: center;
  text-transform: none;
}

.address {
  width: 246rpx;
  height: 32rpx;
  margin-top: 12rpx;
  margin-left: 234rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #9d9d9d;
  text-align: justified;
  text-align: left;
  text-transform: none;
}

.icon {
  position: absolute;
  top: 62rpx;
  right: 30rpx;
  width: 52rpx;
  height: 52rpx;
}

.vipbanner {
  position: relative;
  height: 104rpx;
  margin-top: 60rpx;
  margin-bottom: 16rpx;
  margin-left: 28rpx;
  border-radius: 24rpx;
}

.navbanner {
  display: flex;
  justify-content: space-between;
  width: 694rpx;
  height: 104rpx;
  margin-left: 28rpx;
  border-radius: 24rpx;
}

.vip {
  width: 694rpx;
  height: 104rpx;
}

.diamond {
  position: absolute;
  top: 32rpx;
  left: 36rpx;
  width: 47rpx;
  height: 40rpx;
}

.viptext {
  position: absolute;
  top: 28rpx;
  left: 96rpx;
  width: 56rpx;
  height: 42rpx;
}

.viptext1 {
  position: absolute;
  top: 16rpx;
  left: 102rpx;
  width: 56rpx;
  height: 42rpx;
}

.text {
  position: absolute;
  top: 34rpx;
  left: 178rpx;
  width: 158rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 33rpx;
  color: #b29b85;
  text-align: center;
  text-transform: none;
}

.text1 {
  position: absolute;
  top: 60rpx;
  left: 102rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #b29b85;
  text-align: left;
  text-transform: none;
}

.open {
  position: absolute;
  top: 26rpx;
  right: 60rpx;
  width: 160rpx;
  height: 52rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 52rpx;
  color: #626262;
  text-align: center;
  text-transform: none;
  background: linear-gradient(90deg, #fed2a1 0%, #feb270 100%);
  border-radius: 26rpx;
}

.nav-left {
  position: relative;
  display: flex;
  align-items: center;
  width: 340rpx;
  height: 104rpx;
  background: #2d9bff;
  border-radius: 16rpx;
}

.nav-right {
  position: relative;
  display: flex;
  align-items: center;
  width: 340rpx;
  height: 104rpx;
  background: #e7b070;
  border-radius: 16rpx;
}

.code {
  width: 60rpx;
  height: 60rpx;
  margin-left: 32rpx;
}

.nav-text {
  height: 36rpx;
  margin-left: 16rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: bold;
  color: #fff;
  text-align: justified;
  text-transform: none;
}

.codebg {
  position: absolute;
  right: 10rpx;
  bottom: 0;
  width: 162rpx;
  height: 104rpx;
}

.orderbg {
  position: absolute;
  right: 0rpx;
  bottom: 0;
  width: 116rpx;
  height: 104rpx;
}

.listitem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 688rpx;
  height: 104rpx;
  margin-left: 28rpx;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 24rpx;
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
</style>
