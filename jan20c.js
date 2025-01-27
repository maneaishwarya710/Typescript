var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
function statusIndicator(newSt) {
    switch (newStatus) {
        case 0:
            console.log("Order is Pending");
            break;
        case 1:
            console.log("Order is Shipped");
            break;
        case 2:
            console.log("Order is Delivered");
            break;
        default:
            break;
    }
}
var newStatus = OrderStatus.Shipped;
statusIndicator(newStatus);
