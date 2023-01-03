//Constants    Cause when change something with them change only in one place the(Constants)
    const WITHDRAW_MONEY="WITHDRAW_MONEY";
    const DEPOSITE_MONEY="DEPOSITE_MONEY";
    const ADD_PRODUCT="ADD_PRODUCT";
    const GET_PRODUCTS="GET_PRODUCT";
//Action Creators
// const action={
//     type:"WITHDRAW_MONEY"      
// }
    //HardCoded Way  we can make it more dynamic using function below
const withDraw = (amount) =>{                                    
    return {
        type: WITHDRAW_MONEY ,     //Name of action
        payload:amount             //Dynamic Data passed when dispatch function is written
    }
}
const deposite = (amount) =>{                                    
    return {
        type: DEPOSITE_MONEY, 
        payload:amount
    }
}
const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}
//Getting data from API using redux , here we must use redux thunk(middleware) because it is asynchronous function (Actions default is synchronous)
const getProduct=(products)=>{   
    return {
        type:GET_PRODUCTS,
        payload:products
    }
}
const fetchProducts=()=>{           //Using Redux thunk now actions can return functions not only plain objects
        return async(dispatch)=>{       //The function has access to dispatch function to trigger specific action 
            const data=await fetch('https://fakestoreapi.com/products/1');
            const result=await data.json();
            dispatch(getProduct(result))        //Triggering getProduct action carrying with it the data returned from the fetchAPI
        }
}
//Reducers
const bankReducer=(state=1000,action)=>{
    switch(action.type){
        case WITHDRAW_MONEY:
            return state- action.payload;  //the payload amount is passed by dispatch function 
        case DEPOSITE_MONEY:            //In case of deposite plus the money
            return state+ action.payload;  
            default:
                return state;
    }
}
const productReducer=(state=[],action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return [...state ,action.payload];   //Never mutate the state direct : don't push direct to state make a new state first then push the payload you added 
            case GET_PRODUCTS:
                return [action.payload] ;   //Return the data came from payload (result) > payload:products
            default:
                return state;
    }
}
//we use combieReducers if we have more than one reducer in the application
const appReducer=Redux.combineReducers({
    bank:bankReducer,
    products:productReducer
})
//Store Creation From Redux , plus we put in the enhancer the MiddleWare we want to use to fetch data using asynchronous Functions
const store=Redux.createStore(appReducer,Redux.applyMiddleware(ReduxThunk));

    let valueinput=document.querySelector("#value");
    let custom=document.querySelector("#custom");
    let withdrawbutton=document.querySelector("#withdraw").addEventListener("click",()=>{
        store.dispatch(withDraw(+custom.value));
    })
    let depositebutton=document.querySelector("#deposite").addEventListener("click",()=>{
        store.dispatch(deposite(+custom.value));
    })
valueinput.innerHTML=store.getState().bank;


store.subscribe(()=>{           //after each dispatch subscribe will return the new state but , get state only render one time 
    console.log("Current State", store.getState());
    valueinput.innerHTML=store.getState().bank;

})
