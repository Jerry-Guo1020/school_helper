
// 生成头像 URL
const getAvatar = (seed) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;

export const confessions = [
  {
    avatar: getAvatar(1),
    nickname: '匿名同学',
    time: '5分钟前',
    content: '今天阳光好温暖，就像你给我的感觉。',
    likes: 12
  },
  {
    avatar: getAvatar(2),
    nickname: '神秘人',
    time: '10分钟前',
    content: '希望你每天都开心，就像第一次见到你那天一样。',
    likes: 8
  },
  {
    avatar: getAvatar(3),
    nickname: '小猫咪',
    time: '1小时前',
    content: '偷偷喜欢了你很久，愿星河都为你闪烁。',
    likes: 20
  }
];
