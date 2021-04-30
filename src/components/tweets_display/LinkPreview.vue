<template>
    <a 
        ref="linkPreviewWrapper"
        :href="url" 
        target="_blank"
    >
        <div class="link-prev-container">
            <div class="img-container">
                <img 
                    v-if="imgSrc"
                    class="thumb-img"
                    ref="thumbImg"
                    :src="imgSrc"
                    @load="imageLoaded()"
                    @error="imageLoaded()"
                />
                <div 
                    v-else
                    class="img-replacer"
                >
                </div>
            </div>
            <div class="card-footer">
                <div 
                    class="no-title-container"
                    v-if="!title"
                >
                    Loading preview...
                </div>
                <div 
                    class="title-container" 
                    ref="titleContainer"
                >
                    {{title}}
                </div>
                <div class="domain-container">
                    <span>{{domain}} </span>
                    <i class="fas fa-link"></i>
                </div>
            </div>
        </div>
        
    </a>
</template>

<script>
import {serverGetLinkPreview} from "../../communicators/serverCommunicator"

export default {
    props:{
        url:{
            type: String,
            required: true
        },
        tweetId:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            domain: "",
            title: null,
            imgSrc: null,
            cahceDataExists: false
        }
    },
    created(){
        // Check if already exists in ls
        if(localStorage.getItem("tweetLinkPreview" + this.tweetId) != null){
            const cachedData = JSON.parse(localStorage["tweetLinkPreview" + this.tweetId])
            this.domain = cachedData.domain
            this.title = cachedData.title
            this.imgSrc = cachedData.imgSrc
            this.cahceDataExists = true
        }
        else{
            this.domain = new URL(this.url).hostname
            if(this.domain.startsWith("www.")){
                // Trim the www initail
                this.domain = this.domain.substring(4)
            }
        }
    },
    mounted(){
        if(this.cahceDataExists){
            this.$nextTick( () => {
                this.$refs.titleContainer.classList.add("show")
            })
            return
        }
        // Add intersection observer
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
        let observer = new IntersectionObserver(this.handleIntersect, options);
        let target = this.$refs.linkPreviewWrapper
        observer.observe(target);
    },
    methods:{
        handleIntersect(entries, observer){
            let target = this.$refs.linkPreviewWrapper
            let vm = this
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    vm.getLinkPreview();
                    observer.unobserve(target);
                }
            });
        },
        getLinkPreview(){
            let vm = this
            serverGetLinkPreview(this.url).then(function (response){
                if(response.status == 200){
                    const data = response.data
                    vm.$nextTick(() => {
                        vm.domain = data.domain
                        vm.title = data.title
                        vm.imgSrc = data.img
                        vm.$refs.titleContainer.classList.add("show")
                        // Save to ls
                        const objToSave = {
                            domain: vm.domain,
                            title: vm.title,
                            imgSrc: vm.imgSrc
                        }
                        localStorage["tweetLinkPreview" + vm.tweetId] = JSON.stringify(objToSave)
                    })
                }
            })
        },
        imageLoaded(){
            this.$refs.thumbImg.classList.add("show")
        }  
    }
}
</script>

<style lang="scss" scoped>
a{
    display: block;
    text-decoration: none;
    color: unset;
    height: 52vmin;
    border: 1px solid #ebeef0;
    border-radius: 16px;
}

.link-prev-container{
    height: 100%;
    display: flex;
    flex-direction: column;
}

.img-container{
    height: 65%;
}

.thumb-img{
    object-fit: cover;
    object-position: 22% 22%;
    /* Takes the width and the height of the parent */
    width: 100%;
    height: 100%;
    border-radius: 16px 16px 0 0;
    visibility: hidden; 
    opacity: 0;
    transition: opacity 500ms ease;
}
.show{
    visibility: visible !important; 
    opacity: 1 !important;
}

.img-replacer{
    width: 100%;
    height: 100%;
    border-radius: 16px 16px 0 0;
    background: rgba(0, 0, 0, 0.05);
}

.card-footer{
    flex: 1 1 auto; // Takes the remaining height of "link-prev-container"
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem 0.5rem 1rem;
    font-size: 1.51rem;
}
.title-container{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    visibility: hidden;
    opacity: 0;
    transition: opacity 500ms ease;
}
.domain-container{
    color: rgb(101, 119, 134);
}
</style>