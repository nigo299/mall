<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '图片库' },
}
</route>

<template>
  <view class="containerbox">
    <view v-if="!list.length">
      <wd-skeleton :row-col="grid" animation="gradient" />
    </view>

    <!-- <wd-grid v-else :column="3">
      <wd-grid-item use-slot v-for="(item, index) in list" :key="index" custom-class="custom-item">
        <wd-img :key="index" :width="122" :height="122" :src="item" :enable-preview="true" />
      </wd-grid-item>
    </wd-grid> -->
    <wd-grid v-else :column="3">
      <wd-grid-item use-slot v-for="(item, index) in list" :key="index" custom-class="custom-item">
        <wd-img :key="index" :width="122" :height="122" :src="item" custom-class="custom-pic" />
        <view class="checkbox"></view>
      </wd-grid-item>
    </wd-grid>
  </view>
</template>

<script lang="ts" setup>
// code here
import bjk from '@/static/images/bjk.png'
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
  padding: 10px 22px;
}

.piccontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
}

:deep(.custom-item) {
  height: 122px !important;
  padding-top: 10rpx;
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
</style>
