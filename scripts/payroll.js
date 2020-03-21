class Payroll{
    constructor(employee, year, month, days_worked, overtime_worked){
        this.employee = employee
        this.month = month
        this.days_worked = days_worked
        this.overtime_worked = overtime_worked 
    }


    totalSalaryBeforeTaxes = () =>{

        let overtime_rate = localStorage.getItem('overtime_rate')

        if(!overtime_rate){
            overtime_rate = 0
        }

        let working_days = localStorage.getItem('working_days')
        if(!working_days){
            working_days = 20
        }

        let salary = (this.employee.salary/working_days)*this.days_worked

        salary+=(salary*(overtime_rate/100))

        return salary
    
    }

    total_salary_after_taxes = () =>{

        let tax_rate = localStorageg.getItem('tax_rate')
        if(!tax_rate){
            tax_rate = 5
        }

        return total_salary_before_taxes() - ((total_salary_before_taxes()*5)/100)
    }
}