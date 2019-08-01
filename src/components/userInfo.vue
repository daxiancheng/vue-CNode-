<template>
  <div>
    <div v-if="loading" class="load">
      <img src="../assets/loading.gif" alt />
    </div>
    <div v-else class="userInfo">
      <sidebar />
      <div class="userContent">
        <div class="homepage">
          <div class="honmetop">
            <span>主页 /</span>
          </div>
          <div class="authorIfo">
            <div class="urlName">
              <img :src="content.avatar_url" alt />
              <span>{{content.loginname}}</span>
            </div>
            <div class="score">积分：{{content.score}}</div>
            <ul>
              <li>{{content.recent_topics.length + content.recent_replies.length}}个话题收藏</li>
              <li>
                <img src="../assets/home.png" alt />
                http://{{content.loginname}}.github.io
              </li>
              <li>
                <img src="../assets/github.png" alt />
                @{{content.loginname}}
              </li>
              <li>
                <img src="../assets/weibo.png" alt />
                http://weibo.com/{{content.loginname}}
              </li>
            </ul>
            <div class="creatTime">注册时间{{content.create_at | dateTime}}</div>
          </div>
        </div>
        <div class="topic">
          <div class="honmetop">
            <span>最近创建的话题</span>
          </div>
          <div class="authorIfo">
            <ul>
              <li v-for="list in listArry">
                <img :src="content.avatar_url" alt />
                <router-link :to="{name:'articleContent',params:{id:list.id}}">{{list.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="topic">
          <div class="honmetop">
            <span>最近参与的话题</span>
          </div>
          <div class="authorIfo">
            <ul>
              <li v-for="list in listArry">
                <img :src="content.avatar_url" alt />
                <router-link :to="{name:'articleContent',params:{id:list.id}}">{{list.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar";
export default {
  name: "userInfo",
  data() {
    return {
      loading: true,
      content: {},
      listArry: []
    };
  },
  components: {
    sidebar
  },
  methods: {
    getSidebar() {
      this.axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(data => {
          this.loading = false;
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
.load {
  position: fixed;
  width: 74%;
  text-align: center;
  padding-top: 300px;
}
.userContent {
  margin-right: 305px;
}
.homepage {
  background-color: #fff;
  border-radius: 4px 4px 0 0;
}
.topic {
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  margin-top: 10px;
}
.topic .honmetop {
  color: #333;
}
.honmetop {
  background-color: #f6f6f6;
  border-radius: 4px 4px 0 0;
  padding: 10px;
  font-size: 14px;
  color: #80bd01;
  border-bottom: 1px solid rgba(102, 102, 102, 0.1);
}
.topic .authorIfo img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.topic .authorIfo li {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.11);
}
.authorIfo {
  padding: 10px;
}
.authorIfo ul {
  list-style: none;
}
.authorIfo a {
  padding: 6px;
  color: #08c;
  font-size: 16px;
  text-decoration: none;
}
.authorIfo a:hover{
  text-decoration: underline;
}
.authorIfo img {
  height: 18px;
  margin-right: 6px;
}
.urlName {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.urlName img {
  width: 40px;
  height: 40px;
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
.creatTime {
  color: #778087;
  font-size: 13px;
  padding: 10px 0;
}
</style>


