<template>
    <div class="top">
        <TopNavbar title="匿名投稿" />
    </div>
    <div class="contanier">
        <TopCard 
            title="纯粹表达，无需完美"
            content="一个匿名、无压力的创意空间随时记录<br>你的想法、草图或语音片段。"
            buttonText="立即分享灵感"
            @click="onClick" />
        <div class="content">
            <Info_card />
        </div>
    </div>
</template>

<script setup>
import Info_card from '../../../components/home/functions/nimingtougao/info_card.vue';
import TopCard from '../../../components/home/functions/TopCard.vue';
import TopNavbar from '../../../components/Navbar/topNavbar.vue';
</script>

<style scoped>
.contanier {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
}

.topphoto {
    background-color: #fff;
    width: 100%;
    height: 200px;
    border-radius: 12px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.top-title {
    font-size: 25px;
    font-weight: 700;
    color: #80baa7;
}

.top-content {
    font-size: 18px;
    font-weight: 500;
    color: #4d6907;
    margin-top: 10px;
    text-align: center;
}

.top-btn {
    margin-top: 20px;
    border-radius: 25px;
    width: 150px;
    height: 40px;
    border: none;
    background: radial-gradient(circle at 112% 0%, #ffb570 6%, #80baa7 81%);
    color: #fff;
    font-weight: 600;
    font-size: 14px;
}

.content {
    margin: 20px auto;
    width: 100%;

}
</style>