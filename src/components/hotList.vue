<script setup>
import hotListItem from './hotListItem.vue';
import data from '../mock/counter.js'
</script>

<template>
    <div class="listContainer flex h-40 w-auto rounded bg-white">
        <div class="itemList flex flex-row divide-x py-4">
            <hotListItem v-for="(value,index) in data.data"
                :key="index"
                :index="index"
                :title=value.title
                :subtitles=value.subtitles
                :articleNum=value.articleNum
                :icon=value.icon
            />
        </div>
    </div>
</template>
