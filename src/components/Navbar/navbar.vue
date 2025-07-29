<template>
    <div class="bottom-nav">
        <div class="nav-btn" :class="{ active: route.path === navs[0].path }" @click="go(navs[0].path)">
            <img :src="route.path === navs[0].path ? navs[0].activeIcon : navs[0].icon" class="nav-icon" />
            <span>首页</span>
        </div>
        <div class="nav-btn" :class="{ active: route.path === navs[1].path }" @click="go(navs[1].path)">
            <img :src="route.path === navs[1].path ? navs[1].activeIcon : navs[1].icon" class="nav-icon" />
            <span>活动</span>
        </div>
        <!-- 悬浮按钮：发布 -->
        <div class="nav-center-btn" @click="go(centerBtn.path)">
            <img :src="centerBtn.icon" class="center-icon" />
        </div>
        <div class="nav-btn" :class="{ active: route.path === navs[2].path }" @click="go(navs[2].path)">
            <img :src="route.path === navs[2].path ? navs[2].activeIcon : navs[2].icon" class="nav-icon" />
            <span>消息</span>
        </div>
        <div class="nav-btn" :class="{ active: route.path === navs[3].path }" @click="go(navs[3].path)">
            <img :src="route.path === navs[3].path ? navs[3].activeIcon : navs[3].icon" class="nav-icon" />
            <span>我的</span>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const navs = [
    {
        label: "首页",
        path: "/",
        icon: "/Navbar/首页 (1).svg",
        activeIcon: "/Navbar/首页.svg"
    },
    {
        label: "活动",
        path: "/activity",
        icon: "/Navbar/活动.svg",
        activeIcon: "/Navbar/活动 (1).svg"
    },
    {
        label: "消息",
        path: "/message",
        icon: "/Navbar/message-circle-more (1).svg",
        activeIcon: "/Navbar/message-circle-more.svg"
    },
    {
        label: "我的",
        path: "/personal",
        icon: "/Navbar/square-user-round.svg",
        activeIcon: "/Navbar/square-user-round (1).svg"
    }
]

// 悬浮按钮（发布）
const centerBtn = {
    path: "/publish",
    icon: "/Navbar/jiahao.png" // 你可以用发布的icon
}

function go(path) {
    if (route.path !== path) {
        router.push(path)
    }
}
</script>

<style scoped>
.bottom-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 72px;
    background: #b4fac8;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    z-index: 999;
    box-shadow: 0 -10px 18px rgba(72, 183, 132, 0.10);
    padding-bottom: env(safe-area-inset-bottom, 16px);
}

.nav-btn {
    flex: 1;
    text-align: center;
    color: #277850;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    transition: color 0.18s;
    cursor: pointer;
}

.nav-btn span {
    margin-top: 1px;
    color: #277850;
    letter-spacing: 1px;
    transition: color 0.18s;
}


.nav-btn.active,
.nav-btn.active span {
    color: #33be9b !important;
}

.nav-btn.active .nav-icon {
    filter: drop-shadow(0 3px 8px #a7ecd3) brightness(1.08);
}

/* 图标阴影柔和 */
.nav-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1px;
    filter: drop-shadow(0 1px 3px #a3f5cb);
    transition: filter 0.16s;
}

/* 悬浮按钮美化（发布） */
.nav-center-btn {
    position: relative;
    top: -28px;
    background: linear-gradient(135deg, #d8ffe5 60%, #90f7cc 100%);
    border-radius: 50%;
    width: 66px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border: 6px solid #fff;
    box-shadow: 0 4px 16px #c5fae1c0;
    cursor: pointer;
    transition: box-shadow 0.16s;
}

.center-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

@media (max-width: 480px) {
    .bottom-nav {
        height: 78px;
    }

    .nav-center-btn {
        width: 68px;
        height: 68px;
        top: -35px;
    }

    .center-icon {
        width: 50px;
        height: 50px;
    }

    .nav-icon {
        max-width: 32px;
    }
}
</style>
