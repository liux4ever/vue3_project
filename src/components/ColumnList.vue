<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar && column.avatar.url"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <router-link
            :to="{ name: 'column', params: { id: column.id } }"
            class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, PropType, defineComponent } from "vue";
import { ColumnsProps } from "../store";
export default defineComponent({
  // defineComponent最重要的功能的是 在TS下给予组件 正确的类型判断
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnsProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((item) => {
        if (!item.avatar) {
          item.avatar = {
            url: require("@/assets/logo.png"),
          };
        }
        return item;
      });
    });
    console.log(columnList);
    return {
      columnList,
    };
  },
});
</script>

<style></style>
