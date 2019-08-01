<template>
  <div class="sidebar">
    <div class="author">
      <div class="authorName">
        <span>作者</span>
      </div>
      <div class="authorIfo">
        <div class="urlName">
          <router-link :to="{name:'userInfo',params:{name:content.loginname}}"><img :src="content.avatar_url" alt /></router-link>
          <span>{{content.loginname}}</span>
        </div>
        <div class="score">积分：{{content.score}}</div>
        <div>
          <i>"追求卓越，成功就会在不经意间追上你。"</i>
        </div>
      </div>
    </div>
    <div class="topics">
      <div class="authorName">
        <span>作者其他话题</span>
      </div>
      <div class="authorIfo">
        <ul> 
          <li v-for="list in listArry"><router-link :to="{name:'articleContent',params:{id:list.id}}">{{list.title}}</router-link></li>
        </ul>
      </div>
    </div>
    <div class="topics">
      <div class="authorName">
        <span>无人回复的话题</span>
      </div>
      <div class="authorIfo">
        <ul>
          <li v-for="list in listArry"><router-link :to="{name:'articleContent',params:{id:list.id}}">{{list.title}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      content: {},
      listArry: []
    };
  },
  methods: {
    getSidebar() {
      this.axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(data => {
          this.content = data.data.data;
          this.listArry = data.data.data.recent_topics.slice(0, 5);
        });
    }
  },
  beforeMount() {
    this.getSidebar();
  }
};
</script>
<style scoped>
.sidebar {
  float: right;
  width: 290px;
}
.author {
  background-color: #fff;
  border-radius: 4px;
}
.topics {
  background-color: #fff;
  border-radius: 4px;
  margin-top: 10px;
}
.authorName {
  padding: 10px;
  color: #444;
  font-size: 14px;
  background-color: #f6f6f6;
  border-radius: 4px 4px 0 0;
}
.authorIfo {
  padding: 10px;
}
.authorIfo i {
  font-size: 14px;
  color: #444;
}
.urlName {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.urlName img {
  width: 48px;
  height: 48px;
  border-radius: 3px;
}
.urlName span {
  color: #778087;
  margin-left: 10px;
}
.score {
  color: #333;
  font-size: 14px;
  margin-bottom: 4px;
}
.authorIfo ul {
  list-style: none;
}
.authorIfo li {
  
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.authorIfo a{
font-size: 14px;
  color: #778087;
  text-decoration: none;
}
</style>


