<!-- src/views/ChatPage.vue -->
<template>
    <div class="chat-page">
        <header class="chat-header">
            <button class="back" @click="$router.back()">←</button>
            <span class="title">Gunnar</span>
        </header>

        <main class="chat-body">
            <div class="msg left">
                <div class="bubble bubble-left">
                    👏👏👏 We haven't seen you for 2 weeks. Would you like to set up an appointment?
                </div>
            </div>
            <div class="msg right">
                <div class="bubble bubble-right">
                    OK, let's make an appointment
                </div>
            </div>
        </main>

        <footer class="composer">
            <input v-model="draft" class="input" placeholder="Enter your message" />
            <button @click="send" class="send">➤</button>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const draft = ref('')
function send() {
    if (!draft.value) return
    alert(`发送消息: ${draft.value}`)
    draft.value = ''
}
</script>

<style scoped>
.chat-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #f7f6fb;
}

.chat-header {
    display: flex;
    align-items: center;
    padding: 10px;
    background: #fff;
    box-shadow: 0 2px 8px #0001;
}

.chat-header .title {
    flex: 1;
    font-weight: bold;
    text-align: center;
}

.chat-body {
    flex: 1;
    padding: 14px;
    overflow-y: auto;
}

.msg {
    margin: 8px 0;
    display: flex;
}

.msg.left {
    justify-content: flex-start;
}

.msg.right {
    justify-content: flex-end;
}

.bubble {
    padding: 10px 12px;
    border-radius: 14px;
    max-width: 70%;
}

.bubble-left {
    background: #f8dff3;
    color: #333;
}

.bubble-right {
    background: #705cff;
    color: #fff;
}

.composer {
    display: flex;
    padding: 10px;
    background: #fff;
}

.input {
    flex: 1;
    border: none;
    background: #f1f1f7;
    border-radius: 18px;
    padding: 6px 12px;
}

.send {
    border: none;
    background: #705cff;
    color: #fff;
    margin-left: 8px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
}
</style>
