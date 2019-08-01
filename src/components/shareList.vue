<template>
  <div class="indexList">
    <div v-if="loading" class="load">
      <img src="../assets/loading.gif" alt />
    </div>
    <div v-else>
      <div class="listTitle">
        <ul>
          <li :class="{activeTab:active==='全部'}" @click="clickTitle">
            <router-link to="/">全部</router-link>
          </li>
          <li :class="{activeTab:active==='精华'}" @click="clickTitle">
            <router-link to="/essenceList">精华</router-link>
          </li>
          <li :class="{activeTab:active==='分享'}" @click="clickTitle"><router-link to="/shareList">分享</router-link></li>
          <li :class="{activeTab:active==='问答'}" @click="clickTitle">问答</li>
          <li :class="{activeTab:active==='招聘'}" @click="clickTitle">招聘</li>
          <li :class="{activeTab:active==='客户端测试'}" @click="clickTitle">客户端测试</li>
        </ul>
      </div>
      <div class="listContent">
        <ul>
          <li v-for="c in contentArr">
            <router-link :to="{name:'userInfo',params:{name:c.author.loginname}}">
              <img :src="c.author.avatar_url" alt />
            </router-link>
            <span class="sp">
              {{c.reply_count}}/
              <span class="visit">{{c.visit_count}}</span>
            </span>
            <span
              :class="{listSt:(c.good===true || c.top===true),listSty:(c.good!==true && c.top!==true)}"
            >{{c | listStyle}}</span>
            <router-link
              :to="{name:'articleContent',params:{id:c.id,name:c.author.loginname}}"
            >{{c.title}}</router-link>
            <span class="replay">
              <img :src="c.author.avatar_url" />
              <span>{{c.last_reply_at | dateTime}}</span>
            </span>
          </li>
        </ul>
        <pagesbtn @page="pages"></pagesbtn>
      </div>
    </div>
  </div>
</template>

<script>
import pagesbtn from "./pagesbtn";
export default {
  name: "shareList",
  data() {
    return {
      active: "分享",
      contentArr: [],
      loading: true,
      currentPage: 1
    };
  },
  components: {
    pagesbtn
  },
  methods: {
    clickTitle(e) {
      this.active = e.currentTarget.innerText;
    },
    getIndexData() {
      this.axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.currentPage,
            limit: 30,
            tab: "share"
          }
        })
        .then(data => {
          this.loading = false;
          this.contentArr = data.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    pages(value) {
      this.currentPage = value;
      this.getIndexData();
    }
  },
  beforeMount() {
    this.getIndexData();
  }
};
</script>

<style scoped>
.listTitle {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 4px 4px 0 0;
}
.listTitle ul {
  color: #80bd01;
}
.listTitle li {
  display: inline-block;
  margin: 0 10px;
  font-size: 14px;
}
.listTitle a {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}
.activeTab {
  padding: 3px 4px;
  background-color: #80bd01;
  color: white;
  border-radius: 3px;
}
.listContent {
  background-color: white;
  overflow: hidden;
}
.listContent li {
  padding: 10px;
  border-bottom: 1px solid #e1e1e162;
  display: flex;
  align-items: center;
  color: #333;
  position: relative;
}
.listContent li:hover {
  background-color: #f5f5f5;
}
.listContent img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.listContent .sp {
  width: 70px;
  font-size: 14px;
  color: #9e78c0;
  margin: 0 2px;
  text-align: center;
}
.listContent .visit {
  font-size: 10px;
  color: #b4b4b4;
}
.listSt {
  padding: 2px 4px;
  background-color: #80bd01;
  color: white;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 4px;
}
.listSty {
  padding: 2px 4px;
  background-color: #e5e5e5;
  color: #999;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 4px;
}
.replay {
  position: absolute;
  right: 10px;
  padding: 0 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 84px;
}
.replay span {
  color: #999;
  font-size: 11px;
}
.replay img {
  width: 18px;
  height: 18px;
}
.listContent a {
  text-decoration: none;
  color: black;
}
.listContent a:hover {
  text-decoration: underline;
}
.load {
  position: fixed;
  width: 74%;
  text-align: center;
  padding-top: 300px;
}
</style>

