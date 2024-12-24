import {createSlice} from '@reduxjs/toolkit'


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        
    },
    reducers:{
       addItem(state,action){
            const itemData=action.payload;
            const existingItem=state.items.find((item)=>item.id===itemData.id)
            if(existingItem){
                existingItem.quantity++;
                existingItem.price+=existingItem.actual_price;
            }else{
                const data={
                    id:itemData.id,
                    image:itemData.image,
                    price:itemData.price,
                    title:itemData.title,
                    quantity:1,
                    actual_price:itemData.price
                }
                state.items.push(data);
            } 
            state.totalQuantity+=1;
       },
       deleteItem(state,action){
         const data=action.payload;
         const existingData=state.items.find((item)=>item.id===data.id);
         if(existingData.quantity===1){
            state.items=state.items.filter((item)=>item.id!==data.id);
         }else{
            existingData.quantity-=1;
            existingData.price-=existingData.actual_price
         }
         state.totalQuantity-=1;
       },
       
       
    }
})

 const cartActions=cartSlice.actions;
 export {cartActions,cartSlice}
