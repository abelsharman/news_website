<template>
    <div class="header">
        <img src="../assets/images/logo.svg" alt="">
        <div>
            <span v-for="(item, index) in list" :key="index" v-text="item.text"></span>
        </div>
        <v-btn icon><v-icon color="error" @click="goSearch">mdi-magnify</v-icon></v-btn>
        <v-btn color="error">Войти</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                {
                    text: 'Главная',
                    value: 'main'
                },
                {
                    text: 'Мир',
                    value: 'world'
                },
                {
                    text: 'Бизнес',
                    value: 'business'
                },
                {
                    text: 'Политика',
                    value: 'politology'
                },
                {
                    text: 'Истории',
                    value: 'history'
                },
                {
                    text: 'Подкасты',
                    value: 'podcasts'
                },
                {
                    text: 'Интервью',
                    value: 'interview'
                },
            ]
        }
    },
    methods: {
        goSearch(){
            this.$router.push('/Search')
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    padding: 8px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img, button:nth-child(2){
        width: 9vw;
    }
    div{
        span{
            display: inline-block;
            margin: 0 0.7vw;
            font-family: 'Gilroy', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 1.11vw;
            line-height: 20px;
            color: #333333;
            transition: 0.5s all ease;
            text-transform: uppercase;
            cursor: pointer;
        }
        span:hover{
            text-decoration-line: underline;
            color: #EF3124;
        }
    }
    
}
</style>