import {computed, reactive, toRefs} from 'vue';

function plusCalculator(){
    let state = reactive({
         num1 : 20, 
         num2 : 20, 
         result : computed(() => parseInt(state.num1) + parseInt(state.num2)) 
        });
        return toRefs(state);
}
export { plusCalculator } //export해줘야 다른곳에서 쓸수있으니까 잊지말자