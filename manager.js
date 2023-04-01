class Manager extends Person {
    constructor(name, surname, employee) {
        super(name, surname);
        this.employee = employee;
    }

    hire(text) {
        this.employee.push(text)
    }
    fire(array) {
        // let employeeFired = this.employee.indexOf(array);
        // let newNumbersOfEmployees = array.slice(employeeFired, 1)
        // return newNumbersOfEmployees
        this.employee.pop(array)
    }

    allEarnings() {
        let allEarnings = 0;
        for (let i = 0; i < this.employee.length; i++) {
            const element = this.employee[i];
            allEarnings += element.sumOfEarnings();

        }
        return allEarnings;
    }


    totalClients() {
        let totalClients = 0;
        for (let i = 0; i < this.employee.length; i++) {
            const element = this.employee[i];
            totalClients += element.numberOfClients();

        } return totalClients
    }
    totalEmployee() {
        let count = 0;
        for (let i = 0; i < this.employee.length; i++) {
            const element = this.employee[i];
            count++
        } return count
    }

    toString() {
        return super.toString() + `NUMERO IMPIEGATI: ${this.totalEmployee()}\nNUMERO CLIENTI TOTALI: ${this.totalClients()}\nGUADAGNO TOTALE: ${this.allEarnings()}`
    }

}
