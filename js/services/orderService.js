import * as shippingService from './shippingService.js';

export function total(order){
    const discount = order.discount/100;
    const finalPrice = order.basic - (order.basic*discount) + shippingService.shipment(order);
    return finalPrice;
}