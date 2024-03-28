<template>
    <div class="detailBox">
        <h2>{{ product.title }}</h2>
        <div class="content">
            <div class="photo">
                <img :src="product.image" :alt="product.title">
            </div>
            <div class="info">
                <p>이 상품의 아이디는 {{ product.id }}</p>
                <p>카테고리 : {{ product.category }}</p>
                <p>가격 : {{ product.price }}</p>
                <p>요약설명 : <span v-html="product.description"></span></p>
                <p v-if="showBtn"><button type="button" @click="onClick">리뷰쓰기</button></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                product : null,
                showBtn : false
            }
        },
        created(){
            this.product = this.$store.getters.fnGetProducts.find(item=>item.id == this.$route.params.id)
            // 개발할때 상세이미지 경로
            this.product.image = '/'+this.product.image 
            
            // build 할때 상세이미지 경로
            // this.product.image = '/starMart/'+this.product.image 

            if (this.$store.getters.fnGetLogined.email) {
                this.showBtn = true
            } else {
                this.showBtn = false
            }
        },
        methods : {
            onClick(){
                this.$store.commit("change__Type", "review")
                this.$router.push("/communityWrite")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detailBox {
        h2 { text-align:center; font-size:30px; margin:20px 0 }
        .content {
            display:flex; 
            .photo { width:300px; margin-right:50px;  }
            .info { flex:1;
                button { background:red; color:#fff; padding:10px 20px; margin:10px 0}
            }
        }
        
    }
</style>