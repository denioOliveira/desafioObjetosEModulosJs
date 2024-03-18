export function shipment (order){
   const orderPrice = order.basic;
    if(orderPrice < 100){
        return 20;
    } else if(orderPrice < 200){
        return 12;
    } else { 
        return 0;
    }
    
}