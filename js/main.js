import * as orderService from "./services/orderService.js";
import Order from "./models/order.js";

const data = document.getElementById("orderData").innerHTML.split("\n");
//console.log(`Data: ${data}`)
const order = new Order(data[0], data[1], data[2]);
console.log(`Pedido codigo ${order.code}`);
console.log(`Valor total: ${orderService.total(order).toFixed(2)}`);