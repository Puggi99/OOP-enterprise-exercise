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
        return `PRODOTTO: ${this.product}\nQUANTITA': ${this.quantity}\nPREZZO: ${this.unityprice.toFixed(2)}\nTOTALE ORDINE: ${this.getTotalPrice().toFixed(2)}\n`
    }
}