<template>
  <div class="post">
    <div style="display: flex;">
      <div style="width:15%">{{post.id}} - {{ post.title }}</div>
      <div style="width:15%;margin-right: 70%;">{{ post.body }}</div>
      <div style="margin-right: 15px;" class="right">
        <button>edit</button>
      </div>
      <div class="right">
        <button @click="removePost(post.id)">remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-item",
  props: {
    post: {
      type: Object,
      required: true
    },
  },

  methods: {
    removePost(postId) {
      this.$emit('remove-post', postId)
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
}

.right {
  float: right;
}
</style>