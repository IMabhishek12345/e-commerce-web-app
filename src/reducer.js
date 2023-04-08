export const initialState={
    basket:[],                
    user:null  //Now our state has basket as well as user
}

//Get basket total
export const getBasketTotal=(basket)=>
 basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
     console.log(action); //here action will print the dispatch function
     
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
             const index=state.basket.findIndex((basketitem)=>basketitem.id===action.item.id);
             let newBasket=[...state.basket];
             if (index>=0){
                newBasket.splice(index,1);
             }else{
                console.warn(`can't remove the product with (id:${action.item.id}) as it is 
                    not in the basket`);
             }
             return{
                 ...state,
                 basket: newBasket
             }
         case "SET_USER":
            return{
                ...state,
                user: action.user
            }
         case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
            }
            default:
               return state   
    }
}
export default reducer;