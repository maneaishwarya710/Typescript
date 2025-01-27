enum OrderStatus{
    Pending,
    Shipped,
    Delivered
}


function statusIndicator(newSt:OrderStatus) {
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


const newStatus:OrderStatus=OrderStatus.Shipped;
statusIndicator(newStatus);