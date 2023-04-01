class Order {
    constructor(product, quantity, unityprice) {
        this.product = product;
        this.quantity = quantity;
        this.unityprice = unityprice;
    }
    getTotalPrice() {
        const total = this.quantity * this.unityprice;
        return total
    }

    toString() {
        return `PRODOTTO: ${this.product}\nQUANTITA': ${this.quantity}\nPREZZO: ${this.unityprice}\nTOTALE ORDINE: ${this.getTotalPrice()}\n`
    }
}