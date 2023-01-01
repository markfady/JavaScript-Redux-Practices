const action={
    type:"WITHDRAW_MONEY"
}

const reducer=(state=1000,action)=>{
    switch(action.type){
        case "WITHDRAW_MONEY":
            return state-100;
            default:
                return state;
    }
}
const store=Redux.createStore(reducer);
store.dispatch(action);
console.log(store.getState())
