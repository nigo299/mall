<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '海报',
  },
}
</route>

<template>
  <canvas canvas-id="myCanvas" style="width: 350px; height: 350px"></canvas>

  <canvas
    id="qrcode"
    canvas-id="qrcode"
    style="position: abosolute; left: -2000px; width: 200px; height: 200px"
  ></canvas>

  <button @click="savePoster">保存海报</button>
</template>

<script lang="ts" setup>
import test from '../../static/images/home/testt.png'
import person from '../../static/images/mine/banner.png'
import UQRCode from 'uqrcodejs'

onMounted(() => {
  wx.getSystemInfoAsync({
    success(res) {
      // 屏幕宽高各乘2倍, 宽高保存到data, 供html用(如果你的图片宽高是固定的,直接在data设置你的图片宽高*2即可)
      // that.setData({ width: res.screenWidth * 2 })
      // that.setData({ height: res.screenHeight * 2 })

      drawqrcode()
    },
  })
})

function drawPoster(qrcodepath) {
  const ctx = uni.createCanvasContext('myCanvas')

  // 加载背景图片
  const bgImage = test // 背景图本地路径
  ctx.drawImage(bgImage, 0, 0, 350, 350) // 假设背景图大小与 canvas 相同

  ctx.drawImage(qrcodepath, 85, 85, 200, 200) // 根据需要调整位置和大小
  const xx = person // 背景图本地路径
  ctx.drawImage(xx, 135, 135, 100, 100) // 假设背景图大小与 canvas 相同
  // 添加文字
  ctx.setFontSize(20) // 设置字体大小
  ctx.setFillStyle('#f2480b') // 设置字体颜色
  ctx.fillText('测试文字123123', 200, 330) // 在 (50, 50) 的位置绘制文字

  // 执行绘制
  ctx.draw()
}
const drawqrcode = () => {
  // 获取uQRCode实例
  const qr = new UQRCode()
  // 设置二维码内容
  qr.data = 'https://uqrcode.cn/doc'
  // 设置二维码大小，必须与canvas设置的宽高一致
  qr.size = 200
  // 调用制作二维码方法
  qr.make()
  // 获取canvas上下文
  const canvasContext = uni.createCanvasContext('qrcode') // 如果是组件，this必须传入
  // 设置uQRCode实例的canvas上下文
  qr.canvasContext = canvasContext
  // 调用绘制方法将二维码图案绘制到canvas上
  qr.drawCanvas()
  setTimeout(() => {
    getqrcode()
  }, 1000)
}
const getqrcode = () => {
  uni.canvasToTempFilePath({
    canvasId: 'qrcode',
    success: (res) => {
      const qrcodepath = res.tempFilePath
      // 保存到相册

      drawPoster(qrcodepath)
    },
    fail: (err) => {
      console.error('导出海报失败', err)
    },
  })
}
function savePoster() {
  uni.canvasToTempFilePath({
    canvasId: 'myCanvas',
    success: (res) => {
      const posterPath = res.tempFilePath
      // 保存到相册
      saveToAlbum(posterPath)
    },
    fail: (err) => {
      console.error('导出海报失败', err)
    },
  })
}

function saveToAlbum(filePath) {
  uni.saveImageToPhotosAlbum({
    filePath,
    success: () => {
      uni.showToast({
        title: '海报保存成功',
        icon: 'success',
      })
    },
    fail: (err) => {
      if (
        err.errMsg === 'saveImageToPhotosAlbum:fail:auth denied' ||
        err.errMsg === 'saveImageToPhotosAlbum:fail auth deny'
      ) {
        // 请求权限
        uni.showModal({
          content: '请授权保存图片到您的相册',
          success: (modalRes) => {
            if (modalRes.confirm) {
              uni.openSetting()
            }
          },
        })
      } else {
        uni.showToast({
          title: '保存失败',
          icon: 'none',
        })
      }
      console.error('保存图片失败', err)
    },
  })
}
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    uni.downloadFile({
      url,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.tempFilePath)
        } else {
          reject(new Error('Download failed'))
        }
      },
      fail: reject,
    })
  })
}
</script>

<style lang="scss" scoped></style>
