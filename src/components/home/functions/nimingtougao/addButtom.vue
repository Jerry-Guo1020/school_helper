<template>
    <!-- click使用@click="$emit('click')这个语法是Vue.js中用于触发事件的方式，就是可以在页面中新建触发事件自己设置 -->
<div class="fab" @click="$emit('click')">
    <!-- 使用slot标签：这个是用于设置默认的按钮内容显示的在组件中，
        如果组件导入页面的时候没有传入内容，则会显示这里的内容。 -->
    <slot>
        <span class="fab-icon">✏️</span>
    </slot>
</div>
</template>

<script setup>

</script>

<style scoped>
.fab {
    position: fixed;
    right: 24px;
    bottom: 128px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(circle at 65% 28%, #ffb570 60%, #ff8247 100%);
    box-shadow: 0 8px 28px rgba(255,130,71,0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
    transition: box-shadow .18s, transform .13s;
    animation: faGlow 2.5s infinite alternate cubic-bezier(.85,0,.13,1);

}

.fab:active {
    box-shadow: 0 5px 17px rgba(255,130,71,0.27);
    transform: scale(.97);
}

.fab-icon {
    font-size: 24px;
    color: #fff;
}   

@keyframes fabGlow {
  0% { box-shadow: 0 8px 28px rgba(255,130,71,0.18);}
  100% { box-shadow: 0 12px 40px rgba(255,130,71,0.25);}
}
</style>