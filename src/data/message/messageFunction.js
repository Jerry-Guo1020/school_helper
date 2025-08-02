// src/data/message/messageFunctionFunction.js
import followIcon from '/message/messageFunction/喇叭.svg'
import visitorIcon from '/message/messageFunction/谁看过我.svg'
import likeIcon from '/message/messageFunction/谁喜欢我.svg'
import rankIcon from '/message/messageFunction/通讯录.svg'

export const MessageFunctions = [
  {
    title: '最新关注',
    icon: followIcon,
    bg: 'rgb(88, 222, 301)',
    badge: ''
  },
  {
    title: '谁看过我',
    icon: visitorIcon,
    bg: '#ffe671',
    badge: '' // 有未读数
  },
  {
    title: '谁喜欢我',
    icon: likeIcon,
    bg: '#e1a4f9',
    badge: ''
  },
  {
    title: '游客表',
    icon: rankIcon,
    bg: '#a1f4e0',
    badge: ''
  }
]
