<template>
  <div @click="routerJump">Login</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const routerJump = () => {
      router.push({ name: "column", params: { id: 1 } });
    };
    return {
      routerJump,
    };
  },
});
</script>

<style>
</style>