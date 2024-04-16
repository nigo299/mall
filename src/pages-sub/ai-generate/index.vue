<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: 'AI管家聊天',
  },
}
</route>

<template>
  <view class="wrap">
    <view class="head" hover-class="none" hover-stop-propagation="false">
      <image class="star" :src="star"></image>
    </view>
    <scroll-view
      class="chat-container"
      scroll-y="true"
      :scroll-into-view="scrollIntoView"
      style="height: 71vh"
    >
      <view
        class="message"
        v-for="msg in messages"
        :key="msg.id"
        :id="'msg-' + msg.id"
        :class="{ sender: msg.isSender }"
      >
        <view class="message-wrap" :class="{ usermsgwrap: msg.isSender }">
          <image
            class="avatar"
            :class="{ useravatar: msg.isSender }"
            :src="msg.isSender ? user : server"
          ></image>
          <view
            class="message-content"
            :class="{ senderchat: msg.isSender, serverchat: !msg.isSender }"
          >
            {{ msg.text }}
            <view class="serverblock" v-if="!msg.isSender">
              <view class="re-btn">
                <image class="regenerage" :src="regenerage"></image>
                重新生成
              </view>
              <view class="add-btn">
                <image class="regenerage" :src="add"></image>
                添加
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="foot">
      <view class="input-wrap" hover-class="none" hover-stop-propagation="false">
        <input type="text" v-model="value" placeholder="输入描述来生成优质好评~" class="input" />
        <button class="send-btn" @click="send">发送</button>
      </view>
    </view>
  </view>
  <tab-bar :active="3"></tab-bar>
</template>

<script lang="ts" setup>
import star from '../../static/images/ai/star.png'
import user from '../../static/images/ai/user.png'
import server from '../../static/images/ai/server.png'
import regenerage from '../../static/images/ai/regenerate.png'
import add from '../../static/images/ai/add.png'
const value = ref<string>('')
function send(event) {
  console.log('value.value', value.value)
  // if (value.value) {
  messages.value.push({
    id: messages.value.length,
    text: value.value,
    time: '12:01',
    isSender: false,
  })
  value.value = ''
  // }
}
// 消息列表
const messages = ref([])
// 控制自动滚动到的元素 ID
const scrollIntoView = ref('')

onMounted(() => {
  // 初始化示例消息
  loadMessages()
})

// 观察消息列表的变化，并滚动到最新消息
watchEffect(() => {
  if (messages.value.length > 0) {
    scrollIntoView.value = `msg-${messages.value[messages.value.length - 1].id}`
  }
})

// 模拟加载消息的函数
function loadMessages() {
  messages.value = [
    {
      id: 2,
      text: '你好，有什么可以帮助你的吗？',
      time: '12:01',
      isSender: true,
    },
    {
      id: 1,
      text: '你好，有什么可以帮助你的吗？你好，有什么可以帮助你的吗？',
      time: '12:00',
      isSender: false,
    },
  ]
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 750rpx;
  height: auto;
  background: #eff3f8;
  border-radius: 0rpx;
}

.head {
  width: 750rpx;
  height: 112rpx;
  background: linear-gradient(180deg, #32a0ff 0%, #4dacff 100%);
  border-radius: 0rpx;
}

.star {
  width: 98rpx;
  height: 114rpx;
  margin-left: 22rpx;
}

.foot {
  position: fixed;
  bottom: 164rpx;
  width: 750rpx;
  height: 144rpx;
  background: #fff;
  border-radius: 40rpx 40rpx 0rpx 0rpx;
}

.input-wrap {
  display: flex;
  width: 686rpx;
  height: 88rpx;
  margin-top: 24rpx;
  margin-left: 32rpx;
  background: #eff3f8;
  border-radius: 64rpx;
}

.input {
  width: 542rpx;
  height: 88rpx;
  padding-left: 32rpx;
  font-size: 28rpx;
}

.send-btn {
  width: 120rpx;
  height: 68rpx;
  margin: 10rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 500;
  line-height: 68rpx;
  color: #fff;
  text-align: center;
  text-transform: none;
  background: #32a0ff;
  border-radius: 58rpx;
}

.chat-container {
  box-sizing: border-box;
  height: 400rpx;
  padding: 24rpx;
  overflow-y: auto;
  background-color: #f0f0f0;
}

.message {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 默认靠左对齐 */
  margin-bottom: 40rpx;
}

.message.sender {
  align-items: flex-end; /* 发送者信息靠右对齐 */
}

.senderchat {
  box-sizing: border-box;
  padding: 24rpx 32rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  text-transform: none;
  background: #32a0ff !important;
  border-radius: 24rpx;
}

.message-content {
  max-width: 60%;
  padding: 24rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  text-transform: none;
  background-color: white;
  border-radius: 24rpx;
  box-shadow: 0 2rpx 4rpx rgb(0 0 0 / 10%);
}

.message-time {
  margin-top: 4rpx;
  font-size: 24rpx;
  color: #777;
  text-align: right;
}

.message-wrap {
  display: flex;
  align-items: center;
}

.usermsgwrap {
  justify-content: flex-end;
}

.avatar {
  width: 80rpx;
  height: 80rpx;
  margin: 0 8rpx;
}

.useravatar {
  order: 2;
}

.serverblock {
  display: flex;
  height: 60rpx;
  margin-top: 20rpx;
}

.re-btn {
  width: 200rpx;
  height: 56rpx;
  margin-left: 58rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 56rpx;
  color: #32a0ff;
  text-align: center;
  text-transform: none;
  border: 2rpx solid #32a0ff;
  border-radius: 74rpx;
}

.add-btn {
  width: 142rpx;
  height: 56rpx;
  margin-left: 10rpx;
  font-size: 28rpx;
  font-style: normal;
  font-weight: 400;
  line-height: 56rpx;
  color: #fff;
  text-align: center;
  text-transform: none;
  background: #32a0ff;
  border: 2rpx solid #32a0ff;
  border-radius: 74rpx;
}

.regenerage {
  width: 38rpx;
  height: 38rpx;
  margin-top: -2rpx;
  margin-right: 1rpx;
}

.serverchat {
  min-width: 50vw;
}
</style>
