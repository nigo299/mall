<template>
  <wd-tabbar
    fixed
    bordered
    safeAreaInsetBottom
    placeholder
    :model-value="props.active"
    active-color="#2494FF"
    inactive-color="#979797"
    backdrop-blur-3xl
    class="tab-bar"
    @change="handleChange1"
  >
    <wd-tabbar-item title="主页">
      <template #icon>
        <wd-img
          round
          height="52rpx"
          width="52rpx"
          :src="$props?.active === 0 ? homeHL : home"
        ></wd-img>
      </template>
    </wd-tabbar-item>
    <wd-tabbar-item title="礼品">
      <template #icon>
        <wd-img
          round
          height="52rpx"
          width="52rpx"
          :src="$props?.active === 1 ? giftHL : gift"
        ></wd-img>
      </template>
    </wd-tabbar-item>
    <wd-tabbar-item>
      <template #icon>
        <wd-img round height="80rpx" width="80rpx" :src="add"></wd-img>
      </template>
    </wd-tabbar-item>
    <wd-tabbar-item title="AI">
      <template #icon>
        <wd-img round height="52rpx" width="52rpx" :src="$props?.active === 3 ? aiHL : ai"></wd-img>
      </template>
    </wd-tabbar-item>
    <wd-tabbar-item title="我的">
      <template #icon>
        <wd-img
          round
          height="52rpx"
          width="52rpx"
          :src="$props?.active === 4 ? mineHL : mine"
        ></wd-img>
      </template>
    </wd-tabbar-item>
  </wd-tabbar>
</template>

<script lang="ts" setup>
import home from '../static/tabbar/home.png'
import homeHL from '../static/tabbar/homeHL.png'
import gift from '../static/tabbar/gift.png'
import giftHL from '../static/tabbar/giftHL.png'
import add from '../static/tabbar/add.png'
import ai from '../static/tabbar/ai.png'
import aiHL from '../static/tabbar/aiHL.png'
import mine from '../static/tabbar/mine.png'
import mineHL from '../static/tabbar/mineHL.png'
const props = defineProps<{
  active?: number
}>()
const routes = [
  '/pages/index/index',
  '/pages/index/gift',
  '/pages/index/ai',
  '/pages/index/ai',
  '/pages/index/mine',
]
const tabbar = ref(props.active || 0)

function handleChange1({ value }: { value: number }) {
  console.log('value', value)
  console.log('tabbar.value', tabbar.value)
  if (value !== props.active) {
    uni.redirectTo({
      url: routes[value],
    })
  }
}
</script>
