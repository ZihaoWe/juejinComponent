import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const hotListItems =reactive([
    {
      icon:"/src/assets/hotIcon1.png",
      articleNum:true,
      title:"综合文章榜",
      subtitles:[
        "带你了解更全面的Monorepo-优劣、踩坑",
        "为什么Node应用要用PM2来跑",
        "js小众好用的技巧【api】"
      ]
    },
    {
      icon:"/src/assets/hotIcon2.png",
      articleNum:false,
      title:"精选专栏",
      subtitles:[
        "CodeGuide | 程序员编码指南",
        "JS每日一算法",
        "每日掘金"
      ]
    },
    {
      icon:"/src/assets/hotIcon3.png",
      articleNum:false,
      title:"推荐收藏集",
      subtitles:[
        "JS每日一算法",
        "webGL入门和实践",
        "每日掘金"
      ]
    },
  ])
  return { hotListItems }
})
