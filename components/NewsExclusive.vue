<template>
    <div class="exclusive">
        <h2>Эксклюзив</h2>
        <div class="exclusive_first">
            <div class="exclusive_item" v-for="(item) in list.slice(0, 2)" :key="item.id">
                <!-- <div :style="[ item.img ? { 'background-image': item.img } : {} ]"></div> -->
                <img :src="item.img" alt="">
                <span v-for="(subitem) in item.tags" :key="subitem" v-text="subitem"></span>
                <h3 @click="goPage(item.id)" v-text="item.name"></h3>
                <h4 v-text="item.description"></h4>
                <p v-text="item.from_date"></p>
            </div>
        </div>
        <div class="exclusive_second">
            <div class="exclusive_item" v-for="(item) in list.slice(2, list.length)" :key="item.id">
                <!-- <div :style="[ item.img ? { 'background-image': item.img } : {} ]"></div> -->
                <img :src="item.img" alt="">
                <span v-for="(subitem) in item.tags" :key="subitem" v-text="subitem"></span>
                <h3 @click="goPage(item.id)" v-text="item.name"></h3>
                <h4 v-text="item.description"></h4>
                <p v-text="item.from_date"></p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            list: [
                {
                    id: 1, 
                    tags: ['#Политика', '#Мир'],
                    name: 'Конец эпохи в России: санкции действуют, а западные компании бегут',
                    description: "McDonald's приостанавливает работу в России. Вот почему это важно...", 
                    from_date: '12 марта, 13:53', 
                    img: require('../assets/images/test/main_news.svg'),
                },
                {
                    id: 2, 
                    tags: ['#Политика'],
                    name: 'Задержан Кайрат Сатыбалдыулы',
                    description: "Кайрат Сатыбалдыулы задержан Антикоррупционной службой", 
                    from_date: '12 марта, 13:53', 
                    img: require('../assets/images/test/main_news.svg'),
                },
                {
                    id: 3, 
                    tags: ['#Политика'],
                    name: '"Кажется, сейчас проснемся и все закончится". В Казахстан едут жители Украины и России',
                    description: "В связи с последними событиями, происходящими в Украине, в мегаполисы Казахстана, в частности Нур-Султан и Алматы, приезжают жители Украины и России.", 
                    from_date: '12 марта, 13:53', 
                    img: require('../assets/images/test/main_news.svg'),
                },
                {
                    id: 4, 
                    tags: ['#Политика'],
                    name: '"Кажется, сейчас проснемся и все закончится". В Казахстан едут жители Украины и России',
                    description: "В связи с последними событиями, происходящими в Украине, в мегаполисы Казахстана, в частности Нур-Султан и Алматы, приезжают жители Украины и России.", 
                    from_date: '12 марта, 13:53', 
                    img: require('../assets/images/test/main_news.svg'),
                },
                {
                    id: 5, 
                    tags: ['#Политика'],
                    name: '"Кажется, сейчас проснемся и все закончится". В Казахстан едут жители Украины и России',
                    description: "В связи с последними событиями, происходящими в Украине, в мегаполисы Казахстана, в частности Нур-Султан и Алматы, приезжают жители Украины и России.", 
                    from_date: '12 марта, 13:53', 
                    img: require('../assets/images/test/main_news.svg'),
                },
                {
                    id: 6, 
                    tags: ['#Политика'],
                    name: '"Кажется, сейчас проснемся и все закончится". В Казахстан едут жители Украины и России',
                    description: "В связи с последними событиями, происходящими в Украине, в мегаполисы Казахстана, в частности Нур-Султан и Алматы, приезжают жители Украины и России.", 
                    from_date: '12 марта, 13:53', 
                    img: require('../assets/images/test/main_news.svg'),
                },
            ]
        }
    },
    methods: {
        goPage(id) {
            this.$router.push(`/News/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.exclusive{
    margin: 64px 0 32px 0;
    h2{
        font-family: 'Gilroy', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        text-transform: uppercase;
        color: #333333;
        margin-bottom: 32px;
    }
    .exclusive_first{
        display: grid;
        grid-template-columns: repeat(2, 48%);
        grid-gap: 2%;
        justify-content: space-between;
    }
    .exclusive_second{
        display: grid;
        grid-template-columns: repeat(4, 22%);
        grid-gap: 4%;
        justify-content: space-between;
        .exclusive_item{
            img{
                height: 280px;
            }
        }
    }
    &_item{
        img{
            width: 100%;
            height: 350px;
            object-fit: cover;
            margin-bottom: 8px;
        }
        span{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            margin-right: 8px;
            color: #EF3124;
        }
        h3{
            margin: 16px 0 8px 0;
            font-family: 'Gilroy', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 23px;
            color: #181818;
            cursor: pointer;
        }
        h4{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #333333;
            margin-bottom: 16px;
        }
        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #333333;
        }
    }
}
</style>