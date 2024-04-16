<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '发布' },
}
</route>

<template>
  <view class="containerbox">
    <view class="wrap">
      <wd-grid :column="3">
        <wd-grid-item
          use-slot
          v-for="(item, index) in list"
          :key="index"
          custom-class="custom-item"
        >
          <wd-img
            :key="index"
            :width="122"
            :height="122"
            :src="item"
            custom-class="custom-pic"
            :lazy-load="true"
            @load="checkboxVisible.push(index)"
          />

          <view v-if="checkboxVisible?.includes(index)" @click="selectPic(item)">
            <image class="select" :src="select" v-if="selectPics?.includes(item)"></image>
            <view class="checkbox" v-else></view>
          </view>
        </wd-grid-item>
      </wd-grid>
    </view>
    <view class="foot">
      <view class="not-all" hover-class="none" hover-stop-propagation="false"></view>
      <text class="selecttext" selectable="false" space="false" decode="false">全选</text>
      <text class="selectedtext" selectable="false" space="false" decode="false">已选</text>
      <text class="selectednum" selectable="false" space="false" decode="false">
        {{ selectPics.length }}
      </text>
      <button class="random">随机</button>
      <button :class="{ save: selectPics.length, random: !selectPics.length }" @click="save">
        保存
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import select from '../../static/images/pub/select.png'
import { usePicStore } from '@/store/pic'
const selectPics = ref<string[]>([])
const store = usePicStore()

const selectPic = (item) => {
  if (selectPics.value.includes(item)) {
    selectPics.value.splice(selectPics.value.indexOf(item), 1)
  } else {
    selectPics.value.push(item)
  }
}

const checkboxVisible = ref<number[]>([])

const list = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
])

const save = () => {
  if (selectPics.value.length) {
    store.setSelectPics(selectPics.value)
    nextTick(() => {
      uni.navigateBack()
    })
  }
}
</script>

<style lang="scss" scoped>
.containerbox {
  min-height: 90vh;
  padding: 10px;
  background-color: #f4f4f4;
}

.piccontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
}

:deep(.custom-item) {
  height: 122px !important;
  padding-top: 6rpx;
  text-align: left !important;
}

:deep(.custom-pic) {
  position: relative;
}

.checkbox {
  position: absolute;
  top: 42rpx;
  right: 8rpx;
  width: 42rpx;
  height: 42rpx;
  background: rgb(0 0 0 / 50%);
  border: 1px solid #000;
  border: 2rpx solid #fff;
  border-radius: 50%;
}

.select {
  position: absolute;
  top: 42rpx;
  right: 8rpx;
  width: 52rpx;
  height: 52rpx;
}

.nopic {
  width: 400rpx;
  height: 400rpx;
  margin-top: 150rpx;
}

.nodata {
  text-align: center;
}

.nodatatext {
  margin-bottom: 12rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 33rpx;
  color: #999;
  text-align: center;
  text-transform: none;
}

.sub-btn {
  width: 224rpx;
  height: 68rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  text-align: left;
  text-align: center;
  text-transform: none;
  background: linear-gradient(180deg, #3aa6ff 0%, #2293ff 100%);
  border-radius: 132rpx;
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
}

image {
  will-change: transform;
}

.wrap {
  padding-bottom: 200rpx;
}

.not-all {
  width: 36rpx;
  height: 36rpx;
  margin-right: 10rpx;
  border: 2rpx solid #2494ff;
  border-radius: 50%;
}

.selecttext {
  width: 56rpx;
  height: 48rpx;
  margin-right: 32rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 48rpx;
  color: #333;
  text-align: left;
  text-transform: none;
}

.selectedtext {
  width: 48rpx;
  height: 48rpx;
  margin-right: 4rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 48rpx;
  color: #333;
  text-align: left;
  text-transform: none;
}

.selectednum {
  width: 16rpx;
  height: 48rpx;
  margin-right: 114rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: bold;
  line-height: 48rpx;
  color: #2494ff;
  text-align: left;
  text-transform: none;
}

.random {
  width: 178rpx;
  height: 80rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 80rpx;
  color: #2494ff;
  text-align: center;
  text-transform: none;
  background: #fff;
  border: 2rpx solid #2494ff;
  border-radius: 102rpx;
}

.save {
  width: 178rpx;
  height: 80rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 80rpx;
  color: #fff;
  text-align: center;
  text-transform: none;
  background: #2494ff;
  border: 2rpx solid #2494ff;
  border-radius: 102rpx;
}
</style>
