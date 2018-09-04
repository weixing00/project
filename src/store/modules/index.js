import {getBrandList} from '../../api/index';

let state = {
    letters: [],
    brand: {},
    brandWord:"",
    isshow:false,
}

let mutations = {
    initState: (state, payload)=>{
        let letters = [];
        let brand = {};
        payload.forEach((item)=>{
            let spell = item.Spelling[0];
            if (letters.indexOf(spell) != -1){
                brand[spell].push(item);
            }else{
                letters.push(spell);
                brand[spell] = [item];
            }
        });
        state.letters = letters;
        state.brand = brand;
    },
    showSection(state,payload){
        state.isshow = payload
    },
    showBrandword(state,payload){
        state.brandWord = payload
    }
}

let actions = {
    initState: ({commit}, payload)=>{
        console.log('hello');
        getBrandList().then(body=>{
            console.log('bdoy...', body);
            if (body.code == 1){
                commit('initState', body.data);
            }else{
                alert(body.msg);
            }
        })
    }
} 


export default {
    namespaced: true,
    state,
    mutations,
    actions
}