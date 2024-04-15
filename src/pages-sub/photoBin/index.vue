<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '图片库' },
}
</route>

<template>
  <wd-tabs v-model="tab" color="#2494FF" :lineWidth="24" :line-height="3" inactiveColor="#B1B2B4">
    <wd-tab :title="`我的`">
      <view class="containerbox">
        <!-- <wd-grid v-else :column="3">
      <wd-grid-item use-slot v-for="(item, index) in list" :key="index" custom-class="custom-item">
        <wd-img :key="index" :width="122" :height="122" :src="item" :enable-preview="true" />
      </wd-grid-item>
    </wd-grid> -->
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
            />
            <!-- <view class="checkbox"></view> -->
          </wd-grid-item>
        </wd-grid>
      </view>
    </wd-tab>
    <wd-tab :title="`公共`">
      <view class="containerbox">
        <!-- <wd-grid v-else :column="3">
      <wd-grid-item use-slot v-for="(item, index) in list" :key="index" custom-class="custom-item">
        <wd-img :key="index" :width="122" :height="122" :src="item" :enable-preview="true" />
      </wd-grid-item>
    </wd-grid> -->
        <view class="nodata" hover-class="none" hover-stop-propagation="false">
          <image class="nopic" :src="noPic" lazy-load="true"></image>
          <view class="nodatatext" hover-class="none" hover-stop-propagation="false">
            还没有上传图片
          </view>
          <button class="sub-btn">上传图片</button>
        </view>
      </view>
    </wd-tab>
  </wd-tabs>
</template>

<script lang="ts" setup>
// code here
import noPic from '../../static/images/photo/noPic.png'
const show = ref(false)

const grid = [
  [
    { width: '122px', height: '122px' },
    { width: '122px', height: '122px' },
    { width: '122px', height: '122px' },
  ],
  [
    { width: '122px', height: '122px' },
    { width: '122px', height: '122px' },
    { width: '122px', height: '122px' },
  ],
]
const tab = ref<number>(1)
const list = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])
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
  width: 24px;
  height: 24px;
  border: 1px solid #000;
  border-radius: 50%;
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
</style>
