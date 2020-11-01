<template>
    <div class="page-wrapper">
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
        <div>
            <div class="tabs-container">
                <Tabs :tabs="tabs" :current="cur" @tabClick="tabClick">
                    <template v-slot:tab="{ tab, index }">
                        <div :class="[ cur === index ? 'active' : '', 'list-tab']"
                            :style="listTabStyle"
                        >
                            <span class="tab-name-span">
                                {{ `${tab.name}` }}
                            </span>
                        </div>
                    </template>
                </Tabs>
            </div>    
            <div class="tab-content-container">
                {{ `current tab: ${tabs[cur].name}` }}
            </div>
        </div>
    </div>

</template>


<script>
    import MenuHeader from "../../components/MenuHeader.vue"
    import Tabs from "../../components/Tabs.vue"

    export default {
        components: {
            MenuHeader,
            Tabs
        },
        data(){
            return{
                myEl: null,
                cur: 0,
                tabs: [{ name: "Tweets" }, { name: "Users" }, { name: "Media" }],
                listTabStyle:{}
            }
        },
        created(){
            // Width of each tab
            this.listTabStyle.width = parseInt(100/this.tabs.length) + "vw"
        },
        mounted() {
            this.myEl = this.$el;
        },
        methods: {
            tabClick(index) {
                this.cur = index
            }
        }
    }
</script>


    
<style scoped>
.page-wrapper {
    height: 100vh;
    width: 100vw;
}
.tabs-container{

}
.list-tab {
  box-sizing: border-box;
  font-size: 4.5vmin;
  padding: 11px;
  text-align: center;
  font-weight: 700;
  color: rgb(101, 119, 134);
  border-bottom: 1px solid rgb(204, 214, 221) ;
}
.active {
    color: rgb(29,161,242);
    border-bottom: 2px solid rgb(29,161,242) ;
}
.tab-name-span{
    font-family: "Segoe UI";
}
.tab-content-container{
    font-size: large;
}
</style>
    