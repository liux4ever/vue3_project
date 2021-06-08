<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <img :src="item.avatar" :alt="item.title" />
      <h5>{{ item.title }}</h5>
      <p>{{ item.description }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default {
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
};
</script>

<style></style>
