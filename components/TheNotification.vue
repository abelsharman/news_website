<template>
    <div class="notifications">
        <div :id="`notification-${index}`" :style="{ backgroundColor: item.backgroundColor }" v-for="(item, index) in getNotifications" :key="index">
            <p v-text="item.text"></p>
            <v-icon @click="deleteNotification(index)">mdi-close</v-icon>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getNotifications'])
    },
    watch: {
        getNotifications: {
            handler(value){
            },
            deep: true
        }
    },
    methods: {
        deleteNotification(index){
            let notification = document.querySelector(`#notification-${index}`)
            notification.classList.add('notification-disappear')
            setTimeout(() => {
                this.$store.commit('DELETE_NOTIFICATION', index)
            }, 500);
        }
    }
}
</script>

<style scoped lang="scss">
@keyframes appear {
    from{
        opacity: 0;
        height: 0px;
        top: 20px;
    }
    to{
        opacity: 1;
        height: 100%;
        top: 0px;
    }
}
@keyframes disappear {
    from{
        opacity: 1;
        height: 100%;
        top: 0px;
    }
    to{
        opacity: 0;
        height: 0;
        top: 20px;
    }
}
.notifications{
    position: absolute;
    bottom: 20px;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    div{
        position: relative;
        top: 0px;
        display: flex;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        margin-top: 10px;
        animation: appear 1s ease;
        transition: 0.5s all ease;
    }
    img{
        width: 12px;
        margin-left: 10px;
        cursor: pointer;
    }
    .notification-disappear{
        animation: disappear 0.5s ease;
    }
}
@media (orientation: portrait) {
    .notifications{
        bottom: 0px;
        div{
            width: 90vw;
            padding: 10px 5vw;
            margin-top: 1px;
            border-radius: 0px;
        }
    }
}
</style>