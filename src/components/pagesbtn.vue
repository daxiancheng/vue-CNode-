<template>
  <div class="pagesbtn">
    <ul @click="pagebtn">
      <li>«</li>
      <li>上一页</li>
      <li v-show="btns[0]!==1">...</li><li v-for="btn in btns" :class="{active:btn === currentBtn}"><button>{{btn}}</button></li><li>...</li>
      <li>下一页</li>
      <li>»</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'pagesbtn',
    data(){
        return {
             btns:[1,2,3,4,5],
             currentBtn:1,
             maxPage:50
        }
    },
    methods:{
        pagebtn(e){
            let currentp = parseInt(e.target.innerText)
            if(currentp){
                this.currentBtn = currentp
                if(currentp === this.btns[4]){
                  this.btns.shift()
                  this.btns.push(this.btns[3]+1)
                }else if(currentp === this.btns[0] && currentp!==1){
                  this.btns.pop()
                  this.btns.unshift(this.btns[0]-1)
                }
            }else{
              if(e.target.innerText==='下一页'){
                 document.querySelector('.active').nextSibling.click()
              }else if(e.target.innerText==='上一页'){
                  document.querySelector('.active').previousSibling.click()
              }else if(e.target.innerText==='«'){
                this.currentBtn = 1
                this.btns=[1,2,3,4,5]
              }else if(e.target.innerText==='»'){
                this.currentBtn = this.maxPage
                this.btns = [this.maxPage-4,this.maxPage-3,this.maxPage-2,this.maxPage-1,this.maxPage]
              }
            }
            this.$emit('page',this.currentBtn)
        }
    }
};
</script>

<style scoped>
.pagesbtn {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}
.pagesbtn li {
  display: inline-block;
  border: 1px solid rgba(51, 51, 51, 0.1);
  margin: 0 2px;
  padding: 4px 10px;
  border-radius: 3px;
}
.pagesbtn button{
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
}
.pagesbtn li:hover{
    background-color: #f5f5f5;
}
.active{
    background-color: #dddddd;
}
</style>

