import produce from 'immer'
import {createStore} from 'redux'

//1.create object store, database
const initialState={
    products:[
        {name:'Aaaa',id:'123456789',description:'bbbb',count:0,price:5}
   ]
    
};
 const reducer=produce((state,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            {state.products.push(action.payLoad)}
            break;

    }
 },initialState)

 const store=createStore(reducer)
 window.store=store
export default store;
