<script setup>
    const props=defineProps({
        title:{type:String},
        subtitles:{type:Array},
        articleNum:{type:Boolean},
        icon:{type:String}
    })
</script>

<template>
    <div class="itemsContainer flex flex-col w-64 h-full px-6">
        <div class="header flex flex-row justify-between items-center mb-4">
            <div class="title flex">
                <img class="icon flex h-6 mr-2" :src="props.icon"/>
                <div class="text flex text-base">{{ props.title }}</div>
            </div>
            <a class="flex flex-end text-xs text-gray-400" href="https://juejin.cn/hot/articles/1" target="_blank">更多></a>
        </div>
        <div class="main flex flex-col">
            <li v-for="(value,index) in props.subtitles" class="flex mb-2 items-center">
                <div v-show=props.articleNum class="text-red-600 text-sm font-semibold ml-2.5 mr-3.5">{{ index+1 }}</div>
                <div v-show=!props.articleNum class="h-1 w-1 bg-red-200 ml-2.5 mr-3.5"></div>
                <a href="" target="_blank" class="flex text-sm hover:text-blue-500 truncate"><span class="truncate">{{ value }}</span></a>
            </li>
        </div>
    </div>
</template>