<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '海报',
  },
}
</route>

<template>
  <canvas canvas-id="myCanvas" style="width: 350px; height: 500px"></canvas>
  <button @click="savePoster">保存海报</button>
</template>

<script lang="ts" setup>
import test from '../../static/images/home/testt.png'
import person from '../../static/images/mine/banner.png'

onMounted(() => {
  wx.getSystemInfoAsync({
    success(res) {
      // 屏幕宽高各乘2倍, 宽高保存到data, 供html用(如果你的图片宽高是固定的,直接在data设置你的图片宽高*2即可)
      // that.setData({ width: res.screenWidth * 2 })
      // that.setData({ height: res.screenHeight * 2 })
      drawPoster()
    },
  })
})

function drawPoster() {
  const ctx = uni.createCanvasContext('myCanvas')

  // 加载背景图片
  const bgImage = test // 背景图本地路径
  ctx.drawImage(bgImage, 0, 0, 300, 450) // 假设背景图大小与 canvas 相同

  const qrCodeImage = person // 二维码图本地路径
  ctx.drawImage(qrCodeImage, 50, 50, 200, 200) // 根据需要调整位置和大小
  wxcode.barcode('myCanvas', '1234567890123456789', 680, 200)
  // 添加文字
  ctx.setFontSize(20) // 设置字体大小
  ctx.setFillStyle('#f2480b') // 设置字体颜色
  ctx.fillText('测试文字', 70, 400) // 在 (50, 50) 的位置绘制文字

  // 执行绘制
  ctx.draw()
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
