<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '好评库' },
}
</route>

<template>
  <view class="wrap">
    <wd-tabs v-model="tab" color="#2494FF" :lineWidth="38" :line-height="3" inactiveColor="#B1B2B4">
      <wd-tab :title="`已使用`">
        <view class="content">
          <view class="item" hover-class="none" hover-stop-propagation="false">
            <view class="title" hover-class="none" hover-stop-propagation="false">
              这家店的卤味虾真是太好吃了！虾肉鲜嫩多 汁，入口即化...
            </view>
            <view class="picwrap" hover-class="none" hover-stop-propagation="false">
              <image
                :src="hot"
                mode="aspectFill"
                lazy-load="true"
                class="pic"
                @click="preview"
              ></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
            </view>
            <view class="badge" hover-class="none" hover-stop-propagation="false">3</view>
            <view class="time" hover-class="none" hover-stop-propagation="false">
              2024/4/13 15:30
            </view>
            <button class="recover" @click="recover">恢复</button>
          </view>
          <view class="item" hover-class="none" hover-stop-propagation="false">
            <view class="title" hover-class="none" hover-stop-propagation="false">
              这家店的卤味虾真是太好吃了！虾肉鲜嫩多 汁，入口即化...
            </view>
            <view class="picwrap" hover-class="none" hover-stop-propagation="false">
              <image
                :src="hot"
                mode="aspectFill"
                lazy-load="true"
                class="pic"
                @click="preview"
              ></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
            </view>
            <view class="badge" hover-class="none" hover-stop-propagation="false">3</view>
            <view class="time" hover-class="none" hover-stop-propagation="false">
              2024/4/13 15:30
            </view>
            <button class="recover" @click="recover">恢复</button>
          </view>
          <view class="item" hover-class="none" hover-stop-propagation="false">
            <view class="title" hover-class="none" hover-stop-propagation="false">
              这家店的卤味虾真是太好吃了！虾肉鲜嫩多 汁，入口即化...
            </view>
            <view class="picwrap" hover-class="none" hover-stop-propagation="false">
              <image
                :src="hot"
                mode="aspectFill"
                lazy-load="true"
                class="pic"
                @click="preview"
              ></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
            </view>

            <view class="time" hover-class="none" hover-stop-propagation="false">
              2024/4/13 15:30
            </view>
            <button class="recover" @click="recover">恢复</button>
          </view>
        </view>
      </wd-tab>
      <wd-tab :title="`未使用`">
        <view class="content">
          <view class="item" hover-class="none" hover-stop-propagation="false">
            <view class="title" hover-class="none" hover-stop-propagation="false">
              这家店的卤味虾真是太好吃了！虾肉鲜嫩多 汁，入口即化...
            </view>
            <view class="picwrap" hover-class="none" hover-stop-propagation="false">
              <image
                :src="hot"
                mode="aspectFill"
                lazy-load="true"
                class="pic"
                @click="preview"
              ></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
              <image :src="hot" mode="aspectFill" lazy-load="true" class="pic"></image>
            </view>
            <view class="badge" hover-class="none" hover-stop-propagation="false">3</view>
            <view class="time" hover-class="none" hover-stop-propagation="false">
              2024/4/13 15:30
            </view>
            <button class="del" @click="recover">删除</button>
            <button class="edit" @click="recover">去编辑</button>
          </view>
        </view>
      </wd-tab>
    </wd-tabs>
  </view>
</template>

<script lang="ts" setup>
// code here
import hot from '../../static/images/home/hot.png'
const tab = ref<number>(0)
const preview = () => {
  uni.previewImage({
    urls: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-1.jpg',
    ],
    current: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  })
}
const recover = () => {
  console.log('xxx')
}
</script>

<style lang="scss" scoped>
// here is scoped style
.content {
  min-height: 100vh;
  padding: 24rpx 32rpx;
  background-color: #f4f4f4;
}

.item {
  position: relative;
  box-sizing: border-box;
  width: 686rpx;
  height: 384rpx;
  padding: 24rpx 28rpx;
  margin-bottom: 16rpx;
  background: #fff;
  border-radius: 16rpx;
}

.title {
  display: -webkit-box;
  width: 630rpx;
  height: 88rpx;
  overflow: hidden;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 44rpx;
  color: #252525;
  text-align: justified;
  text-overflow: ellipsis;
  text-transform: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.pic {
  width: 152rpx;
  height: 152rpx;
  margin-right: 6rpx;
}

.picwrap {
  width: 100%;
  margin-top: 12rpx;
}

.badge {
  position: absolute;
  right: 36rpx;
  bottom: 116rpx;
  width: 56rpx;
  height: 32rpx;
  font-size: 24rpx;
  line-height: 32rpx;
  color: #fff;
  text-align: center;
  background: rgb(0 0 0 / 60%);
  border-radius: 54rpx;
}

.time {
  width: 182rpx;
  height: 44rpx;
  margin-top: 30rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 44rpx;
  color: #adadad;
  text-align: justified;
  text-transform: none;
}

.recover {
  position: absolute;
  right: 28rpx;
  bottom: 28rpx;
  width: 104rpx;
  height: 56rpx;
  font-size: 24rpx;
  font-weight: 500;
  color: #252525;
  background: #fff;
  border: 2rpx solid #dadada;
  border-radius: 132rpx;
}

.del {
  position: absolute;
  right: 160rpx;
  bottom: 28rpx;
  width: 104rpx;
  height: 56rpx;
  font-size: 24rpx;
  font-weight: 500;
  line-height: 57rpx;
  color: #ff32a1;
  background: #fff;
  border: 2rpx solid #ff32a1;
  border-radius: 56rpx;
}

.edit {
  position: absolute;
  right: 24rpx;
  bottom: 28rpx;
  width: 128rpx;
  height: 56rpx;
  font-size: 24rpx;
  font-weight: 500;
  line-height: 56rpx;
  color: #fff;
  background: #539df8;
  border: 2rpx solid #539df8;
  border-radius: 132rpx;
}
</style>
