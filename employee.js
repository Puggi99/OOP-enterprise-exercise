class Employee extends Person {
    constructor(name, surname, clients) {
        super(name, surname);
        this.clients = clients;
    }

    addClient(newClient) {
        this.clients.push(newClient)
    }
    removeClient(exClient) {
        // this.clients.pop(client)
        for (let i = 0; i < this.clients.length; i++) {
            if(exClient === this.clients[i]) {
                this.clients.splice(i,1);
            }           
        }
    }
    bestClient() {
        const clients = this.clients;
        // let bestClient = Math.max(clients)
        let bestClient = clients[0]
        for (let i = 0; i < this.clients.length; i++) {
            const actualClient = clients[i];
            
            const actualSumOfOrder = actualClient.sumOfOrder();
            const actualBestSumOfOrder = bestClient.sumOfOrder()
            if (actualSumOfOrder > actualBestSumOfOrder) {
                bestClient = actualClient;
            }
        }
        return bestClient
    }
    // numberOfClients() {
    //     let count = 0;
    //     for (let i = 0; i < this.clients.length; i++) {
    //         const element = this.clients[i];
    //         count++
    //     }
    //     return count;
    // }

    sumOfEarnings() {
        let sumEarnings = 0;
        for (let i = 0; i < this.clients.length; i++) {
            const element = this.clients[i];
            sumEarnings += element.sumOfOrder();

        }
        return sumEarnings;
    }
    toString() {
        return super.toString() + `NUMERO DI CLIENTI: ${this.clients.length}\nGUADAGNO TOTALE: ${this.sumOfEarnings().toFixed(2
            )}\nMIGLIOR CLIENTE: ${this.bestClient().name} ${this.bestClient().surname}`
    }
}

