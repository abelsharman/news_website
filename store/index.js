export const state = () => ({
    is_mobile: true,
    notifications: [] 
});
export const mutations = {
    SET_IS_MOBILE(state, payload){
        state.is_mobile = payload
    },
    ADD_NOTIFICATION(state, payload){
        state.notifications.push(payload)
    },
    DELETE_NOTIFICATION(state, payload){
        state.notifications.splice(payload, 1)
    }
};
export const actions = {};
export const getters = {
    getIsMobile(state){
        return state.is_mobile
    },
    getNotifications(state) {
        return state.notifications
    }
};