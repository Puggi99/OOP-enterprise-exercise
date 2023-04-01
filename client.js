class Client extends Person {
    constructor(name, surname, address, orders) {
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    addOrder(text) {
        this.orders.push(text)
    }
    sumOfOrder() {
        let sumOrders = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i];
            sumOrders += element.getTotalPrice();
        }
        return sumOrders;
    }
    toString() {
        return super.toString() + `INDIRIZZO: ${this.address}\nORDINI: \n${this.orders}`

    }
}