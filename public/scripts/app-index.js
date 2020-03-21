$(document).ready(function () {
    $('select').formSelect();
});

totalSalaryBeforeTaxes = (s, d_w, o_w) => {

    let overtime_rate = localStorage.getItem('overtime_rate')
    if (!overtime_rate) {
        overtime_rate = 0
    }

    let working_days = localStorage.getItem('working_days')
    if (!working_days) {
        working_days = 20
    }

    let salary = (s / working_days) * d_w

    salary += (o_w * overtime_rate)


    return salary

}

total_salary_after_taxes = (s) => {

    let tax_rate = localStorage.getItem('tax_rate')
    if (!tax_rate) {
        tax_rate = 5
    }

    return s - ((s * tax_rate) / 100)
}

document.getElementById('edit-w-d').addEventListener('click', () => {
    days = prompt('Enter the number of working days per month:')
    localStorage.setItem('working_days', days)
    render()
})
document.getElementById('edit-t-r').addEventListener('click', () => {
    rate = prompt('Enter the tax rate in percent:')
    localStorage.setItem('tax_rate', rate)
    render()
})
document.getElementById('edit-o-r').addEventListener('click', () => {
    rate = prompt('Enter the overtime pay per hour:')
    localStorage.setItem('overtime_rate', rate)
    render()
})


render = () => {
    let working_days = localStorage.getItem('working_days')
    if (!working_days) {
        working_days = 20
    }
    document.getElementById('working-days').innerHTML = working_days


    let overtime_rate = localStorage.getItem('overtime_rate')
    if (!overtime_rate) {
        overtime_rate = 0
    }
    document.getElementById('overtime-rate').innerHTML = overtime_rate

    let tax_rate = localStorage.getItem('tax_rate')
    if (!tax_rate) {
        tax_rate = 5
    }

    document.getElementById('tax-rate').innerHTML = tax_rate









    let data = getAllEmployees()
    if (data.length==0) {
        document.getElementById('options').innerHTML = '<option value="" disabled selected>Employee</option>' + '<option value="" disabled>Please add Employee first</option>'
    }
    else {
        let options = ''

        for (let i = 0; i < data.length; i++) {
            options += `

            <option value="${data[i].id}">${data[i].name}</option>
            
            `

        }


        document.getElementById('options').innerHTML = options
    }

    payrolls = getAllPayrolls()

    if (!payrolls) {
        document.getElementById('no-data').innerHTML = "No Records Found!"
    }
    else {
        let records = ''
        document.getElementById('no-data').innerHTML = ""


        for (let i = 0; i < payrolls.length; i++) {
            records += `
            <tr>
                <td>${payrolls[i].employee.name}</td>
                <td>${payrolls[i].year}</td>
                <td>${payrolls[i].month}</td>
                <td>${payrolls[i].days_worked}</td>
                <td>${payrolls[i].overtime_worked}</td>
                <td>${totalSalaryBeforeTaxes(payrolls[i].employee.salary, payrolls[i].days_worked, payrolls[i].overtime_worked)}</td>
                <td>${total_salary_after_taxes(totalSalaryBeforeTaxes(payrolls[i].employee.salary, payrolls[i].days_worked, payrolls[i].overtime_worked))}</td>
                

                

            </tr>
            
            `
        }
        document.getElementById('payroll_data').innerHTML = records

    }
}

document.getElementById('addRecord').addEventListener('click', (e) => {

    e.preventDefault()

    let employee_id = document.getElementById('options').value
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let days = document.getElementById('days').value
    let overtime = document.getElementById('overtime').value

    if (!employee_id || !year || !month || !days || !overtime) {
        alert('All the information but be provided!')

        console.log(employee_id)
        console.log(year)
        console.log(month)
        console.log(days)
        console.log(overtime)
    }
    else {

        let record = new Payroll(getEmployee(employee_id), year, month, days, overtime)
        addPayroll(record)
        document.getElementById('year').value = ""
        document.getElementById('days').value = ""
        document.getElementById('overtime').value = ""

        render()

    }






})

render()


