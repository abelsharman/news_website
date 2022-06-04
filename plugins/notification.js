export default ({ store }, inject) => {
    const notify = {    
        error(text){
            store.commit('ADD_NOTIFICATION', { text: text, backgroundColor: '#fa8a82' })
        },
        success(text){
            console.log(text);
            store.commit('ADD_NOTIFICATION', { text: text, backgroundColor: '#8fd18a' })
        }
    };
    inject("notify", notify);
  };
  