<template>
    <div class="scrollar">
        <div class="icon">
            <img src="/home/tonggao.png"  class="icon-img "/>
        </div>
        <span class="status">[官方消息]</span>
        <div class="marquee-wrapper">
            <div class="marquee">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('欢迎使用校园助手！请注意查看最新通知。');
</script>

<style scoped>
.scrollar {
    width: 95%;
    height: 40px;
    background-color: #b4fac8;
    border: 3px solid #000;
    border-radius: 12px;
    margin: 10px auto;
    display: flex;
    align-items: center;
}

.icon {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-left: 15px;
    
}

.icon-img {
  width: 22px;
  height: 22px;
}

.status {
    font-size: 18px;
    color: red;
    font-weight: 800;
    flex-shrink: 0;             /*子元素会随着父元素的缩小而缩小 */
    margin-right: 6px;
}

/*跑马灯的效果 */
.marquee-wrapper {
    flex: 1;
    overflow: hidden;
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
}

.marquee {
    white-space: nowrap;        /*文本内容不换行 */
    display: inline-block;      /*一行内展示 */
    font-size: 20px;
    font-weight: 700;
    color: #000;
    animation: scroll-left 10s linear infinite;     /*元素在 10 秒内线性运动，并且无限循环 */
}

@keyframes scroll-left {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>