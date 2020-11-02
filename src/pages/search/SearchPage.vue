<template>
    <div class="page-wrapper">
        <MenuHeader v-if="myEl" :parentsEl="myEl"/>
        <div>
            <div class="tabs-container">
                <Tabs :tabs="tabs" :current="cur" @tabClick="tabClick">
                    <template v-slot:tab="{ tab}">
                        <div>
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
               
            }
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

.tab-name-span{
    font-family: "Segoe UI";
}
.tab-content-container{
    font-size: large;
}
</style>
    