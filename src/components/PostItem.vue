<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post_del">
      <my-button
          @click="$router.push(`/users/${post.id}`)"
      >
        Открыть
      </my-button>
      <my-button
      @click="$emit('remove', post)"
      >
        Удалить
      </my-button>
    </div>

    <div v-if="isShowEdit" class="">
      <input v-model="post.title" type="text">
      <input v-model="post.body" type="text">

    </div>
  </div>

</template>

<script>
export default {
  props: {
    post: {
     type: Object,
      required: true,
    }
  },
  data() {
    return {
      isShowEdit: false,
    }
  },
  methods: {
    showHideEdit() {
      this.isShowEdit = !this.isShowEdit;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post_del {
  display: flex;
}
</style>