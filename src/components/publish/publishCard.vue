<template>
<!-- 内容区 -->
    <div class="content">
      <!-- 发布活动卡片 -->
      <div class="publish-card">
        <!-- 头像及昵称 -->
        <div class="user-info">
          <img class="avatar" src="/vite.svg" alt="头像" />
          <div class="user-texts">
            <div class="nickname">郭笑荣</div>
            <div class="role">发布身份</div>
          </div>
        </div>
        <!-- 标题输入 -->
        <div class="form-item">
          <label class="label">标题（可选）</label>
          <input class="input" placeholder="请输入标题（可选）" />
        </div>
        <!-- 内容输入 -->
        <div class="form-item">
          <label class="label required">内容</label>
          <textarea class="textarea" rows="4" placeholder="分享你的想法..."></textarea>
        </div>
        <!-- 标签 -->
        <div class="form-item">
            <div class="select-top">
          <label class="label">标签</label>
          <span class="tag-btn">选择标签</span></div>
          <div class="tag-select">
            <input class="input tag-input" placeholder="未选择标签" disabled />
          </div>
        </div>
        <!-- 图片上传 -->
        <div class="form-item">
          <label class="label">图片</label>
          <div class="img-upload">
            <div class="img-box">
              <img class="img-icon" src="/vite.svg" alt="添加图片" />
              <div class="img-text">添加图片</div>
            </div>
          </div>
        </div>
        <!-- 底部按钮 -->
        <div class="form-footer">
          <button class="btn cancel">取消</button>
          <button class="btn publish">发布</button>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* 居中内容 */
.content {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 24px;
  box-sizing: border-box;
}

/* 卡片样式 */
.publish-card {
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  padding: 22px 20px 18px 20px;
  margin: 0 auto;
}

/* 用户信息区 */
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  position: relative;
}
.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  background: #f6f6f6;
  border: 1.5px solid #f1f1f1;
}
.user-texts {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.nickname {
  font-weight: 700;
  color: #222;
  margin-bottom: 2px;
}
.role {
  color: #aaa;
  font-size: 12px;
}

/* 表单项 */
.form-item {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.select-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.label {
  font-size: 15px;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
}
.label.required::after {
  content: '*';
  color: #ff7878;
  margin-left: 3px;
}
.input, .textarea, .tag-input {
  background: #f6f6f6;
  border: none;
  border-radius: 12px;
  padding: 9px 13px;
  font-size: 15px;
  outline: none;
  resize: none;
}
.input {
  height: 38px;
}
.textarea {
  min-height: 60px;
  font-family: inherit;
}
.tag-select {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tag-btn {
  background: #edeaff;
  color: #836af7;
  font-size: 13px;
  padding: 4px 14px;
  border-radius: 14px;
  margin-right: 6px;
  cursor: pointer;
}
.tag-input {
  width: 100%;
}

/* 图片上传 */
.img-upload {
  display: flex;
  align-items: center;
}
.img-box {
  width: 72px;
  height: 72px;
  border: 1.2px dashed #d8d8d8;
  border-radius: 10px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.img-icon {
  width: 34px;
  height: 34px;
  margin-bottom: 3px;
}
.img-text {
  color: #888;
  font-size: 13px;
}

/* 底部操作按钮 */
.form-footer {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  flex: 1;
  height: 38px;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  margin: 0 6px;
  cursor: pointer;
  transition: background .2s;
}
.cancel {
  background: #f6f6f6;
  color: #888;
}
.publish {
  background: linear-gradient(to right, #ffba6a 0%, #ff8369 100%);
  color: #fff;
}
</style>