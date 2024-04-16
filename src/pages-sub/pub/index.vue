<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '发布',
  },
}
</route>

<template>
  <view class="wrap" hover-class="none" hover-stop-propagation="false">
    <view class="textwrap" hover-class="none" hover-stop-propagation="false">
      <wd-textarea
        v-model="inputVal"
        placeholder="请输入好评，或点击下方AI帮写按钮生成..."
        size="large"
      />
    </view>
    <view
      @click="handleClick"
      class="select-pic-header"
      hover-class="none"
      hover-stop-propagation="false"
    >
      <view hover-class="none" hover-stop-propagation="false">
        <image class="icon" :src="icon" lazy-load="true"></image>
        <text class="text" hover-class="none" hover-stop-propagation="false">图片库选择图片</text>
        <text class="pic-count" hover-class="none" hover-stop-propagation="false">(232)</text>
      </view>
      <image class="arrow" :src="arrow" lazy-load="true"></image>
    </view>
    <wd-grid :column="3" :gutter="6" custom-class="custom-item" class="grid-wrap">
      <wd-grid-item use-slot>
        <view class="load-block" hover-class="none" @click="upload">
          <image class="upload-icon" :src="uploadIcon" lazy-load="true"></image>
          <view class="upload-text">相册上传图片</view>
        </view>
      </wd-grid-item>
      <wd-grid-item use-slot v-for="item in tempPics" :key="item">
        <image lazy-load="true" class="pics" :src="item" @click="previewImage(item)"></image>
      </wd-grid-item>
    </wd-grid>
    <view class="foot">
      <button class="ai-btn">
        <image lazy-load="true" class="ai-star" :src="aiStar"></image>
        AI帮写
      </button>
      <button class="save">提交</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import icon from '../../static/images/pub/icon.png'
import arrow from '../../static/images/pub/arrow.png'
import uploadIcon from '../../static/images/pub/uploadIcon.png'
import aiStar from '../../static/images/pub/aiStar.png'
import { usePicStore } from '@/store/pic'

const store = usePicStore()
const inputVal = ref<string>('')
const tempPics = ref<string[]>([])
const upload = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    sizeType: ['compressed'],
    camera: 'back',
    success: (res) => {
      const tempFiles = res.tempFiles
      const accept = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG']
      let fail = false
      tempFiles.forEach((item, index) => {
        console.log('压缩之后的图片大小', item.size)
        const extension = item.tempFilePath.split('.')[1]
        if (accept.indexOf(extension) === -1 || Number(item.size) > Number(5242880)) {
          fail = true
        } else {
          // uploadFile(item)
          tempPics.value.push(item.tempFilePath)
        }
      })
      if (fail) {
        uni.showToast({
          title: `仅支持照片文件，最大支持5M，最多传1张`,
          icon: 'none',
          duration: 3000,
        })
      }
    },
  })
}
console.log('store.selectPics', store.selectPics)
watchEffect(() => {
  if (store.$state.selectPics.length) {
    tempPics.value.push(...store.$state.selectPics)
  }
})

const uploadFile = (file) => {
  uni.showLoading({ title: '努力上传中', mask: true })
  // 以文件流的方式上传文件
  uni.uploadFile({
    url: '/common/uploadFile',
    filePath: file.tempFilePath || '',
    name: 'file',
    formData: {},
    headers: { 'Content-Type': 'multipart/form-data' },
    success: async (uploadFileRes) => {
      uni.hideLoading()
      console.log('uploadFileRes>>', uploadFileRes)
      if (uploadFileRes && uploadFileRes.errMsg === 'uploadFile:ok') {
        const item = uploadFileRes && uploadFileRes.data ? JSON.parse(uploadFileRes.data) || {} : {}
        // const params = {
        //   applyId: this.applyId,
        //   type: 1,
        //   VEDIO_SP: item.data,
        // }
        // const { flag } = await this.$api.investigate.addImageInfoCredit(params)
        // if (flag) this.getImageInfoCredit()
      }
    },
    fail: (err) => {
      uni.hideLoading()
      console.log('图片上传接口调用失败', err)
    },
  })
}
const previewImage = (img) => {
  uni.previewImage({
    current: img,
    urls: tempPics.value,
  })
}
function handleClick() {
  uni.navigateTo({
    url: '/pages-sub/pubBin/index',
  })
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 28rpx;
}

.textwrap {
  width: 686rpx;
  height: 400rpx;
  border-bottom: 2rpx solid #eff0f4;
}

.select-pic-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28rpx;
  margin-bottom: 42rpx;
}

.icon {
  width: 52rpx;
  height: 52rpx;
}

.text {
  width: 196rpx;
  height: 36rpx;
  margin-right: 4rpx;
  margin-left: 12rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 33rpx;
  color: #333;
  text-align: left;
  text-transform: none;
}

.pic-count {
  width: 62rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #999;
  text-align: left;
  text-transform: none;
}

.arrow {
  width: 36rpx;
  height: 36rpx;
}

.pics {
  width: 220rpx;
  height: 220rpx;
  margin-right: 12rpx;
}

.load-block {
  position: relative;
  width: 220rpx;
  height: 220rpx;
  margin-right: 12rpx;
  background: #f7f8fa;
}

.upload-icon {
  position: absolute;
  top: 54rpx;
  left: 78rpx;
  width: 64rpx;
  height: 64rpx;
}

.upload-text {
  position: absolute;
  bottom: 54rpx;
  left: 38rpx;
  width: 144rpx;
  height: 32rpx;
  font-size: 24rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 28rpx;
  color: #999;
  text-align: left;
  text-transform: none;
}

image {
  will-change: transform;
}

.upload-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: 42rpx;
}

.pics-wrap {
  display: flex;
  flex-wrap: wrap;
}
/* stylelint-disable-next-line selector-class-pattern */
:deep(.wd-grid-item__content) {
  padding: 0rpx !important;
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
  background-color: #ededed;
  border: 2rpx solid #ededed;
}

.wrap {
  padding-bottom: 200rpx;
}

.save {
  width: 256rpx;
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

.ai-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 418rpx;
  height: 80rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  color: #2494ff;
  text-align: center;
  text-transform: none;
  background: #fff;
  border: 2rpx solid #2494ff;
  border-radius: 102rpx;
}

.ai-star {
  width: 44rpx;
  height: 44rpx;
  margin-right: 8rpx;
}
</style>
