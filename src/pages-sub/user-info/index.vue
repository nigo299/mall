<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '设置',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="box">
      <view class="avatar" @click="choose">
        <image class="avataricon" :src="tempPics ? tempPics[0] : test"></image>
        <view class="icon">
          <wd-icon name="camera" size="18px" color="#FFFFFF"></wd-icon>
        </view>
      </view>
      <wd-form ref="form" :model="model" custom-class="form">
        <wd-cell-group border>
          <wd-picker
            label="类型"
            placeholder="请选择类型"
            label-width="100px"
            prop="value1"
            v-model="model.value1"
            :columns="promotionlist"
            :align-right="true"
            confirm-button-text="确定"
          />
          <wd-input
            label="商家名称"
            label-width="100px"
            prop="value2"
            v-model="model.value2"
            placeholder="请输入"
            :align-right="true"
          />
          <wd-input
            label="商家地址"
            label-width="100px"
            prop="value3"
            v-model="model.value3"
            placeholder="请输入"
            :align-right="true"
          />
          <wd-input
            label="商家电话"
            label-width="100px"
            prop="value4"
            v-model="model.value4"
            placeholder="请输入"
            :align-right="true"
            :rules="[
              {
                required: false,
                validator: validatorMessage,
                message: '请输入正确的手机号',
              },
            ]"
          />
        </wd-cell-group>
        <view class="footer">
          <wd-button type="primary" size="large" @click="handleSubmit" block>提交</wd-button>
        </view>
      </wd-form>
    </view>
    <wd-popup v-model="show" position="bottom" custom-class="popup" @close="handleClose">
      <view class="listitem" @click="chooseFn('camera')">拍照</view>
      <view class="listitem" @click="chooseFn('album')">从手机相册选择</view>
      <view class="listitem" @click="chooseFn('save')">保存图片</view>
      <view class="cancel" @click="chooseFn('cancel')">取消</view>
    </wd-popup>
  </view>
</template>

<script lang="ts" setup>
import test from '../../static/images/home/testt.png'
const tempPics = ref()
const show = ref<boolean>(false)
const promotionlist = ref<any[]>([
  {
    value: '1',
    label: '满减',
  },
  {
    value: '2',
    label: '无门槛',
  },
])

const choose = () => {
  show.value = true
}
const chooseFn = (type) => {
  show.value = false
  if (type === 'camera') {
    uni.chooseImage({
      count: 1, // 默认9，可以选择图片的数量
      sizeType: ['original', 'compressed'], // 可以选择原图或压缩图，默认二者都有
      sourceType: ['camera'], // 从相册选择或使用相机，默认二者都有
      success: function (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        tempPics.value = res.tempFilePaths
      },
    })
  } else if (type === 'album') {
    uni.chooseImage({
      count: 1, // 默认9，可以选择图片的数量
      sizeType: ['original', 'compressed'], // 可以选择原图或压缩图，默认二者都有
      sourceType: ['album'], // 从相册选择或使用相机，默认二者都有
      success: function (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        tempPics.value = res.tempFilePaths
      },
    })
  } else if (type === 'save') {
    downloadFn()
  }
}
const downloadFn = () => {
  uni.downloadFile({
    url: '服务器图片的URL', // 外网可访问的URL
    success: (downloadRes) => {
      if (downloadRes.statusCode === 200) {
        // 下载成功，获取本地文件路径
        const tempFilePath = downloadRes.tempFilePath
        saveImageToLocalAlbum(tempFilePath)
      }
    },
    fail: (err) => {
      console.log('下载失败', err)
      // 可以展示一个错误消息给用户
      uni.showToast({
        title: '下载图片失败',
        icon: 'none',
      })
    },
  })
}
function saveImageToLocalAlbum(tempFilePath) {
  // 需要用户授权访问相册
  uni.getSetting({
    success(settingRes) {
      // 检查是否拥有权限
      if (!settingRes.authSetting['scope.writePhotosAlbum']) {
        uni.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            // 用户已授权，保存图片到相册
            saveToAlbum(tempFilePath)
          },
          fail() {
            // 用户拒绝授权，引导用户授权
            uni.showModal({
              title: '提示',
              content: '请授权保存图片到相册',
              success: (modalRes) => {
                if (modalRes.confirm) {
                  // 打开设置界面让用户手动开启权限
                  uni.openSetting()
                }
              },
            })
          },
        })
      } else {
        // 已有权限，直接保存图片到相册
        saveToAlbum(tempFilePath)
      }
    },
  })
}
function saveToAlbum(tempFilePath) {
  uni.saveImageToPhotosAlbum({
    filePath: tempFilePath,
    success() {
      uni.showToast({
        title: '保存成功',
      })
    },
    fail(err) {
      uni.showToast({
        title: '保存失败',
        icon: 'none',
      })
      console.error('保存图片失败：', err)
    },
  })
}

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
const handleClose = () => {
  show.value = false
}
const model = reactive<{
  value1: string
  value2: string
  value3: string
  value4: string
}>({
  value1: '',
  value2: '',
  value3: '',
  value4: '',
})

const form = ref()

const validatorMessage = (val) => {
  return /1\d{10}/.test(val)
}

const validator = (val) => {
  if (String(val).length >= 4) {
    return Promise.resolve()
  } else {
    // return Promise.reject('长度不得小于4')
  }
}

// 校验函数可以返回 Promise，实现异步校验
const asyncValidator = (val) =>
  new Promise((resolve) => {
    // showLoading('验证中...')

    setTimeout(() => {
      // closeToast()
      resolve(val === '1234')
    }, 1000)
  })

function handleSubmit() {
  form.value
    .validate()
    .then(({ valid, errors }) => {
      if (valid) {
        // showSuccess({
        //   msg: '提交成功',
        // })
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>

<style lang="scss" scoped>
.wrap {
  min-height: 100vh;
  background-color: #f4f4f4;
}

.box {
  width: 750rpx;
  height: 750rpx;
  background: #fff;
  border-radius: 0rpx;
}

.avatar {
  position: relative;
  width: 172rpx;
  height: 172rpx;
  margin-top: 80rpx;
  margin-left: 288rpx;
  border: 4rpx solid #a1d1ff;
  border-radius: 86rpx;
}

.avataricon {
  width: 172rpx;
  height: 172rpx;
  border-radius: 50%;
}

.icon {
  position: absolute;
  right: -10rpx;
  bottom: 0rpx;
  z-index: 9;
  width: 52rpx;
  height: 52rpx;
  line-height: 52rpx;
  text-align: center;
  background: #373334;
  border-radius: 50rpx;
}

.listitem {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104rpx;
  padding: 0 28rpx;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.cancel {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104rpx;
  padding: 0 28rpx;
  margin-top: 20rpx;

  // border: 1px solid red;
}

:deep(.popup) {
  height: 500rpx;
  background-color: #f4f4f4;
  border-radius: 22rpx;
}

:deep(.form) {
  margin-top: 100rpx;
}

.footer {
  padding: 12px;
}
</style>
