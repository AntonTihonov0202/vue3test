<template>
  <div class="post">
<!--    <div><strong>Название:</strong> {{ post.title }}</div>-->
<!--    <div><strong>Описание:</strong> {{ post.body }}</div>-->
    <post-item
        v-for="(post) in posts"
        :post="post"
        @remove-post="removePost"
    >
    </post-item>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    removePost(postId){
      this.$emit('remove-post', postId)
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid black;
  margin-top: 15px;
}
</style>