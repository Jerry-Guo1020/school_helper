<template>
    <div class="container">
        <div class="main-content">
            <!-- 个人信息 -->
            <div class="title">我的</div>
            <div class="user-info">
                <div class="avatar">
                    <img :src="userInfo.avatar" class="avatar-img" />
                </div>
                <div class="username">{{ userInfo.username }}</div>
            </div>
            <!-- 功能卡片一行两列 -->
            <div class="function-row">
                <Card title="会员商城" desc="享你所想" colorFrom="#ffd891" colorTo="#fff" :icon="heartIcon" />
                <Card title="延保服务" desc="保障你的利益" colorFrom="#f8c3cb" colorTo="#fff" :icon="heartIcon" />
            </div>

            <!-- PLUS横条 -->
            <div class="function-content">
                <div class="plus-row">
                    <div class="vip">PLUS会员</div>
                    <div class="vip-content">已经为您优惠593元</div>
                    <button class="plus-btn">立即查看</button>
                </div>
                <div class="function-details">
                    <div class="fun-title">常用功能</div>
                    <div class="details">
                        <div v-for="item in functions" :key="item.path"
                            :class="['functions', { active: route.push === item.push }]" @click="go(item.path)">
                            <img class="icon" :src="route.path === item.path ? item.activeIcon : item.icon" />
                            <span class="label">{{ item.label }}</span>
                        </div>
                    </div>
                </div>

                <div class="other-function">
                    <div class="fun-title">其他服务</div>
                    <div class="details">
                        <div v-for="item in otherFunctions" :key="item.path"
                            :class="['functions', { active: route.push === item.push }]" @click="go(item.path)">
                            <img class="icon" :src="route.path === item.path ? item.activeIcon : item.icon" />
                            <span class="label">{{ item.label }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Navbar />
</template>

<script setup>
import Navbar from '../../components/Navbar/Navbar.vue'
import Card from '../../components/personal/card.vue'
import { ref } from 'vue'
// import heartIcon from '@/assets/heart.png' // 替换为你的实际路径
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const userInfo = ref({
    username: '我爱我的猫咪',
    avatar: '/assets/SVG/personal/avator.jpg'
})

const functions = [
    {
        label: "我的订单",
        path: "/dingdan",
        icon: "/assets/SVG/personal/订单.svg",
    },
    {
        label: "我的客服",
        path: "/kefu",
        icon: "/assets/SVG/personal/客服.svg",
    },
    {
        label: "问题反馈",
        path: "/wenti",
        icon: "/assets/SVG/personal/问题反馈.svg",
    },
    {
        label: "会员商城",
        path: "/huiyuan",
        icon: "/assets/SVG/personal/会员商城.svg",
    },
    {
        label: "在线问诊",
        path: "/wenzhen",
        icon: "/assets/SVG/personal/在线问诊.svg",
    },
    {
        label: "意见反馈",
        path: "/yijian",
        icon: "/assets/SVG/personal/意见反馈.svg",
    },
    {
        label: "售后服务",
        path: "/shouhou",
        icon: "/assets/SVG/personal/售后服务.svg",
    },
]

const otherFunctions = [
    {
        label: "设备升级",
        path: "/dingdan",
        icon: "/assets/SVG/personal/设备升级.svg",
    },
    {
        label: "设置",
        path: "/dingdan",
        icon: "/assets/SVG/personal/设置.svg",
    },
]
</script>

<style scoped>
.container {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: calc(72px + env(safe-area-inset-bottom, 24px));
}

/* 主内容区，宽度统一，所有内容卡片、横条都对齐 */
.main-content {
    width: 92vw;
    max-width: 640px;
    margin: 0 auto;
    padding: 0 0 32px 0;
    box-sizing: border-box;
}

.title {
    margin-left: 14px;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 35px;
}

.user-info {
    display: flex;
    align-items: center;
    margin: 20px 0 0 7px;
}

.avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;


}

.avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}

.username {
    margin-left: 18px;
    font-weight: 600;
    font-size: 1.35rem;
}


.function-row {
    display: flex;
    flex-direction: row;
    gap: 22px;
    width: 100%;

}

.function-row :deep(.card) {
    flex: 1 1 0;
    width: 100%;
    min-width: 0;
}

.plus-row {
    width: 100%;
    background: #343434;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 44px;
    margin: 0 0 0 0;
    color: #fff;
    font-size: 1.15rem;
    gap: 18px;
    box-sizing: border-box;
}

.vip {
    position: relative;
    padding-right: 18px;
    font-weight: bold;
    color: #21e5b5;
    margin-right: 8px;
    letter-spacing: 1px;
    white-space: nowrap;
    /* 严禁跳行*/
}

.vip::after {
    content: " ";
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 18px;
    background: #bbb;
    opacity: 1.7;

}

.vip-content {
    flex: 1 1 0;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    white-space: nowrap;
    /* 严禁跳行*/
}

.plus-btn {
    background: #fff;
    color: #222;
    border: none;
    border-radius: 5px;
    padding: 2px 8px;
    font-weight: bold;
    box-shadow: 0 2px 4px #0001;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    /* 严禁跳行*/
}

.plus-btn:hover {
    background: #f5f5f5;
}

.function-content {
    padding: 0 12px;
}

.function-details {
    height: 100%;
    box-shadow: 0 2px 4px #0001;
    background-color: #fff;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.functions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.fun-title {
    padding-left: 15px;
    padding-top: 10px;
    font-weight: 600;
}

.details {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 0;
    justify-items: center;
    align-items: center;
    padding: 18px 0 0 0;
}

.icon {
    flex-shrink: 0;
    width: 100%;
    max-width: 32px;
    min-width: 18px;
    height: auto;
    aspect-ratio: 1/1;
    margin-bottom: 10px;
}

.label {
    margin-bottom: 10px;
    color: #a7a7a7;
}


.other-function {
    height: 100%;
    box-shadow: 0 2px 4px #0001;
    background-color: #fff;
    margin-top: 25px;
    border-radius: 12px;
}


@media (max-width: 600px) {
    .main-content {
        width: 98vw;
        max-width: 100vw;
        padding: 0 0 24px 0;
    }

    .function-row {
        gap: 10px;
    }

    .plus-row {
        height: 38px;
        font-size: 1rem;
    }

    .title {
        font-size: 1.32rem;
        margin: 35px 0 13px 10px;
    }

}
</style>
