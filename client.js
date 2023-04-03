class Client extends Person {
    constructor(name, surname, address, orders = []) {
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    addOrder(newOrder) {
        this.orders.push(newOrder)
    }
    sumOfOrder() {
        let sumOrders = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i];
            sumOrders += element.getTotalPrice();
        }
        return sumOrders;
    }

    sumOfOrder2(){
        return this.orders.reduce((previous,current)=>{
            previous+= current.getTotalPrice();
            return previous;
        }
        )
    }
    toString() {
        let description = super.toString() + 
        `INDIRIZZO: ${this.address}\n` +
        `ORDINI: \n${this.orders.length}\n` +
        `SPESA TOTALE:  ${this.sumOfOrder().toFixed(2)}€\n` +
        `LISTA ORDINI:\n` 
        for (let i = 0; i < this.orders.length; i++) {
            const orders = this.orders[i];
            description += '-----------------------\n'
            description += orders.toString()
        }return description
       

    }
}