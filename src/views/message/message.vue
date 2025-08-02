    <template>
        <div class="contanier">
            <div class="top">
                <div class="title">消息</div>
                <div class="addfriend">
                    <img src="/message/添加好友.svg" alt="添加好友" class="addfriendIcon" />
                </div>
                <div class="search">
                    <img src="/message/搜索.svg" alt="添加好友" class="searchIcon" />
                </div>
            </div>

            <div class="function">
                <MessageFunction v-for="item in MessageFunctions" :key="item.text" :item="item" />
            </div>

            <div class="message-details">
                <MessageDetails v-for="item in message" :key="item.title" :avatar="item.avatar" :title="item.title"
                    :desc="item.desc" :date="item.date" />
            </div>
            <Navbar />
        </div>
    </template>

<script setup>
import MessageFunction from '../../components/message/messageFunction.vue';
import { MessageFunctions } from '../../data/message/messageFunction.js';
import Navbar from '../../components/Navbar/navbar.vue';
import MessageDetails from '../../components/message/messageDetails.vue';
import { message } from '../../data/message/messageDetails.js';


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
    padding-bottom: calc(124px + env(safe-area-inset-bottom, 24px));
}


.top {
    width: 100%;
    display: flex;
    height: 50px;
    margin-top: 35px;
}

.title {
    font-weight: 600;
    font-size: 32px;
    flex: 1;
}

.addfriend,
.search {
    display: flex;
    align-items: center;
}

.addfriendIcon,
.searchIcon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}

.function {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 16px 0;
    gap: 12px;
    height: 100%;

}
</style>