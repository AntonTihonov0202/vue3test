<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
        @remove-post="removePost"
    />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    PostList,
    PostForm

  },

  data() {
    return {
      posts: [
        {id: 0,title: 'Javascript 0', body: 'Описание поста '},
        {id: 1,title: 'Javascript 1', body: 'Описание поста '},
        {id: 2,title: 'Javascript 2', body: 'Описание поста '},
        {id: 3,title: 'Javascript 3', body: 'Описание поста '},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);

    //  Удаление: У каждого объекта - идентификатор, его передаем, находим в массив объект по идентификатору.
      //  Удаляем объект, подготавливаем массив - отрисовываем.

      // Редактирование:
    },
    removePost(postId) {
      console.log(postId);
      this.posts.splice(postId,1)
      let temp = 0
      this.posts.map(item => item.id = temp++);
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}


</style>/