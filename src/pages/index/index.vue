<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '首页',
  },
}
</route>

<template>
  <view class="wrap">
    <wd-swiper
      :indicator="{ type: 'dots-bar' } as any"
      :list="swiperList"
      autoplay
      :current="0"
      height="260rpx"
      @click="handleClick"
      @change="onChange"
    ></wd-swiper>
    <view class="navbox">
      <view class="left-nav" @click="gotoPage('reviewsBin/index')">
        <image :src="go" mode="aspectFill" lazy-load="true" class="go"></image>
        <image :src="leftNavIcon" mode="aspectFill" lazy-load="true" class="left-nav-icon"></image>
        <div class="left-nav-title">好评库</div>
        <div class="left-nav-subtext">客人评价后审核</div>
      </view>
      <view class="right-nav">
        <view class="right" hover-class="none" hover-stop-propagation="false">
          <image class="top-right-nav" :src="topRightNav" mode="aspectFit" lazy-load="true"></image>
          <image
            class="right-top-icon"
            :src="rightTopIcon"
            mode="aspectFit"
            lazy-load="true"
          ></image>
          <view class="right-top-title" hover-class="none" hover-stop-propagation="false">
            礼品库
          </view>
          <view class="right-top-subtext" hover-class="none" hover-stop-propagation="false">
            购买的礼品
          </view>
        </view>
        <view class="right" hover-class="none" hover-stop-propagation="false">
          <image class="top-right-nav" :src="rightBotNav" mode="aspectFit" lazy-load="true"></image>
          <image
            class="right-bot-icon"
            :src="rightBotIcon"
            mode="aspectFit"
            lazy-load="true"
          ></image>
          <view class="right-top-title" hover-class="none" hover-stop-propagation="false">
            图片库
          </view>
          <view class="right-top-subtext" hover-class="none" hover-stop-propagation="false">
            上传的图片
          </view>
        </view>
      </view>
    </view>
    <view class="list-menu" hover-class="none" hover-stop-propagation="false">
      <view class="block" hover-class="none" hover-stop-propagation="false">
        <image class="list-icon" :src="checkIcon" mode="aspectFit" lazy-load="true"></image>
        <view class="list-text" hover-class="none" hover-stop-propagation="false">审核列表</view>
      </view>
      <view class="block" hover-class="none" hover-stop-propagation="false">
        <view class="badge" hover-class="none" hover-stop-propagation="false">11</view>
        <image class="list-icon" :src="messageIcon" mode="aspectFit" lazy-load="true"></image>
        <view
          class="list-text"
          hover-class="none"
          hover-stop-propagation="false"
          @click="gotoPage('message/index')"
        >
          消息列表
        </view>
      </view>
    </view>
    <view class="check-list" hover-class="none" hover-stop-propagation="false">
      <view class="list-top" hover-class="none" hover-stop-propagation="false">
        <image class="clock" :src="clock" mode="aspectFit" lazy-load="true"></image>
        <view class="list-title" hover-class="none" hover-stop-propagation="false">审核列表</view>
        <view class="list-more" hover-class="none" hover-stop-propagation="false">更多</view>
        <image class="more" :src="more" mode="aspectFit" lazy-load="true"></image>
      </view>
      <template v-if="show">
        <view class="item-list" hover-class="none" hover-stop-propagation="false">
          <image class="avatar" :src="avatar" mode="aspectFit" lazy-load="true"></image>
          <view class="user-name" hover-class="none" hover-stop-propagation="false">匿名用户</view>
          <view class="time" hover-class="none" hover-stop-propagation="false">1分钟前</view>
          <view class="commit" hover-class="none" hover-stop-propagation="false">
            这家店的卤味虾真是太好吃了！虾肉鲜嫩多汁,入 这家店的卤味虾真是太好吃了！虾肉鲜嫩多汁,入
            口即...这家店的卤味虾真是太好吃了！虾肉鲜嫩多汁,入 口即...
          </view>
          <view class="pic-list" hover-class="none" hover-stop-propagation="false">
            <image class="pic-item" :src="topRightNav" lazy-load="true"></image>
            <image class="pic-item" :src="topRightNav" lazy-load="true"></image>
            <image class="pic-item" :src="topRightNav" lazy-load="true"></image>
          </view>
          <button class="btn">已评价</button>
          <view class="borderline" hover-class="none" hover-stop-propagation="false"></view>
        </view>
        <view class="item-list" hover-class="none" hover-stop-propagation="false">
          <image class="avatar" :src="avatar" mode="aspectFit" lazy-load="true"></image>
          <view class="user-name" hover-class="none" hover-stop-propagation="false">匿名用户</view>
          <view class="time" hover-class="none" hover-stop-propagation="false">1分钟前</view>
          <view class="commit" hover-class="none" hover-stop-propagation="false">
            这家店的卤味虾真是太好吃了！虾肉鲜嫩多汁,入 这家店的卤味虾真是太好吃了！虾肉鲜嫩多汁,入
            口即...这家店的卤味虾真是太好吃了！虾肉鲜嫩多汁,入 口即...
          </view>
          <view class="pic-list" hover-class="none" hover-stop-propagation="false">
            <image class="pic-item" :src="topRightNav" lazy-load="true"></image>
            <image class="pic-item" :src="topRightNav" lazy-load="true"></image>
            <image class="pic-item" :src="topRightNav" lazy-load="true"></image>
          </view>
          <button class="btn">已评价</button>
          <view class="borderline" hover-class="none" hover-stop-propagation="false"></view>
        </view>
      </template>
      <view class="nodata" hover-class="none" hover-stop-propagation="false" v-else>
        <image
          class="nodatapic"
          :src="nodata"
          mode="aspectFit"
          lazy-load="false"
          binderror=""
          bindload=""
        ></image>
        <view class="nodatatext" hover-class="none" hover-stop-propagation="false">
          暂无审核记录～
        </view>
      </view>
    </view>
  </view>
  <tab-bar :active="0"></tab-bar>
</template>

<script lang="ts" setup>
import leftNavIcon from '../../static/images/home/leftNavIcon.png'
import go from '../../static/images/home/go.png'
import topRightNav from '../../static/images/home/rightTopNav.png'
import rightTopIcon from '../../static/images/home/rightTopIcon.png'
import rightBotNav from '../../static/images/home/rightBotNav.png'
import rightBotIcon from '../../static/images/home/rightBotIcon.png'
import checkIcon from '../../static/images/home/check-icon.png'
import messageIcon from '../../static/images/home/message-icon.png'
import clock from '../../static/images/home/clock.png'
import more from '../../static/images/home/more.png'
import avatar from '../../static/images/home/avatar.png'
import nodata from '../../static/images/home/nodata.png'

const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])
const show = ref(true)

function handleClick(e) {
  console.log(e)
  uni.navigateTo({
    url: '/pages-sub/photoBin/index',
  })
}
function onChange(e) {
  console.log(e)
}

const gotoPage = (page: string) => {
  uni.navigateTo({
    url: `/pages-sub/${page}`,
  })
}
</script>

<style lang="scss" scoped>
.tab-bar {
  margin-top: 500rpx;
}

.navbox {
  display: flex;
  justify-content: space-between;
  height: 310rpx;
  margin-top: 24rpx;
}

.left-nav {
  position: relative;
  width: 330rpx;
  height: 310rpx;
  background-image: url('../../static/images/home/leftNavBg.png');
  border-radius: 24rpx;
}

.left-nav-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 170rpx;
  height: 170rpx;
}

.go {
  position: absolute;
  bottom: 114rpx;
  left: 32rpx;
  width: 84rpx;
  height: 40rpx;
}

.left-nav-title {
  position: absolute;
  top: 32rpx;
  left: 32rpx;
  width: 108rpx;
  height: 48rpx;
  font-size: 36rpx;
  font-weight: bold;
  line-height: 42rpx;
  color: #fff;
  text-align: justified;
  text-transform: none;
}

.left-nav-subtext {
  position: absolute;
  top: 96rpx;
  left: 32rpx;
  width: 168rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 28rpx;
  color: #e3f1ff;
  text-transform: none;
}

.right {
  position: relative;
  width: 330rpx;
  height: 142rpx;
}

.right-top-icon {
  position: absolute;
  top: 0;
  right: -20rpx;
  width: 142rpx;
  height: 142rpx;
}

.right-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 330rpx;
  height: 310rpx;
}

.right-top-title {
  position: absolute;
  top: 28rpx;
  left: 28rpx;
  width: 108rpx;
  height: 48rpx;
  font-size: 36rpx;
  font-weight: bold;
  line-height: 42rpx;
  color: #fff;
  text-align: justified;
}

.right-top-subtext {
  position: absolute;
  bottom: 30rpx;
  left: 30rpx;
  width: 120rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 28rpx;
  color: #fff;
}

.right-bot-icon {
  position: absolute;
  top: 0;
  right: -30rpx;
  width: 142rpx;
  height: 142rpx;
}

.list-menu {
  display: flex;
  justify-content: space-between;
  width: 686rpx;
  height: 104rpx;
  margin-top: 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
}

.top-right-nav {
  position: absolute;
  top: 0;
  width: 330rpx;
  height: 142rpx;
}

.block {
  position: relative;
  width: 50%;
}

.list-icon {
  position: absolute;
  top: 20rpx;
  left: 28rpx;
  width: 64rpx;
  height: 64rpx;
}

.list-text {
  position: absolute;
  top: 34rpx;
  left: 104rpx;
  width: 112rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #252525;
  text-align: justified;
  text-transform: none;
}

.badge {
  position: absolute !important;
  top: 8rpx;
  left: 62rpx;
  z-index: 9;
  width: 46rpx;
  height: 34rpx;
  font-size: 24rpx;
  line-height: 34rpx;
  color: #fff;
  text-align: center;
  background: #f54e2f;
  border-radius: 17rpx;
}

.check-list {
  width: 686rpx;
  margin-top: 28rpx;
}

.list-top {
  position: relative;
  width: 686rpx;
  height: 90rpx;
  background-image: linear-gradient(to top, rgb(27 147 249 / 0%), rgb(27 147 249 / 14%));
  border-radius: 16rpx;
}

.clock {
  position: absolute;
  top: 28rpx;
  left: 28rpx;
  width: 40rpx;
  height: 40rpx;
}

.list-title {
  position: absolute;
  bottom: 22rpx;
  left: 72rpx;
  width: 120rpx;
  height: 40rpx;
  font-size: 30rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 35rpx;
  color: #352f2f;
  text-align: justified;
  text-transform: none;
}

.list-more {
  position: absolute;
  bottom: 22rpx;
  left: 584rpx;
  width: 48rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #696d76;
  text-align: justified;
  text-transform: none;
}

.more {
  position: absolute;
  right: 24rpx;
  bottom: 28rpx;
  width: 24rpx;
  height: 24rpx;
}

.item-list {
  position: relative;
  box-sizing: border-box;
  width: 686rpx;
  height: 236rpx;
  padding: 28rpx;
  background: #fff;
  border-bottom: 1px solid #f2f2f2 dashed;
}

.avatar {
  position: absolute;
  top: 16rpx;
  width: 48rpx;
  height: 48rpx;
}

.user-name {
  position: absolute;
  top: 24rpx;
  left: 92rpx;
  width: 96rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  color: #343434;
  text-align: justified;
  text-transform: none;
}

.time {
  position: absolute;
  top: 24rpx;
  right: 16rpx;
  width: 82rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-weight: normal;
  font-weight: 400;
  color: #d1d1d1;
  text-align: justified;
  text-transform: none;
}

.commit {
  position: absolute;
  top: 64rpx;
  left: 92rpx;
  width: 578rpx;
  height: 32rpx;
  overflow: hidden;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  color: #868686;
  text-align: justified;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
}

.pic-list {
  position: absolute;
  top: 108rpx;
  left: 94rpx;
  display: flex;
  justify-content: space-between;
  width: 324rpx;
  height: 104rpx;
}

.pic-item {
  width: 104rpx;
  height: 104rpx;
  border-radius: 8rpx;
}

.btn {
  position: absolute;
  right: 24rpx;
  bottom: 24rpx;
  width: 128rpx;
  height: 56rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(180deg, #3aa6ff 0%, #2293ff 100%) !important;
  border-radius: 132rpx;
}

.borderline {
  position: absolute;
  bottom: 0rpx;
  left: 94rpx;
  width: 578rpx;
  height: 1rpx;
  background: #f2f2f2;
}

.wrap {
  height: 100%;
  padding: 0 32rpx;
  padding-top: 16rpx;
  padding-bottom: 100px;
  background-color: #f4f4f4;
}

.nodata {
  position: relative;
  width: 100%;
  height: 400rpx;
  background-color: #fff;
  border-bottom-right-radius: 16rpx;
  border-bottom-left-radius: 16rpx;
}

.nodatatext {
  position: absolute;
  top: 324rpx;
  left: 250rpx;
  width: 190rpx;
  height: 36rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  color: #999;
  text-align: center;
  text-transform: none;
}

.nodatapic {
  position: absolute;
  top: 44rpx;
  left: 202rpx;
  width: 280rpx;
  height: 280rpx;
}
</style>
