<template>
  <div class="post-list">
    <article :key="posts.id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>
          <router-link :to="`/posts/${posts.id}/`">{{
            posts.title
          }}</router-link>
        </h4>
        <div class="row my-3 align-items-center">
          <div v-if="posts.image" class="col-4">
            <img
              :src="posts.image"
              :alt="posts.title"
              class="rounded-lg w-100"
            />
          </div>
          <p :class="{ 'col-8': posts.image }" class="text-muted">
            {{ posts.content }}
          </p>
        </div>
        <span class="text-muted">{{ posts.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { PostProps } from "../testData";
export default defineComponent({
  props: {
    list: {
      required: true,
      type: Object as PropType<PostProps>,
    },
  },
  setup(props) {
    const posts = computed(() => {
      return props.list;
    });
    return {
      posts,
    };
  },
});
</script>

<style scoped>
.post-list h4 a {
  text-decoration: none;
  color: #1a1a1a;
}
.post-list h4 a:hover {
  color: #0d6efd;
}
</style>
