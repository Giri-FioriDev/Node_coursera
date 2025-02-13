let name = process.argv[2];
let age = parseInt(process.argv[3]);
let basicSalary = parseInt(process.argv[4]);
if (age <= 0) {
    console.log('Invalid age ...Enter a valid age');

} else if (basicSalary <= 0) {
    console.log('Invalid Basic salary....Enter a valid salary..');
} else {
    const hra = (50 * basicSalary) / 100;
    console.log('HRA is ', hra);

    const special_allowance = (30 * basicSalary) / 100;
    console.log('special allowance is ', special_allowance);

    const pf = (12 * basicSalary) / 100;
    console.log('PF is ', pf);

    let grossSalary = (hra + special_allowance) - pf;


    let annualGross = 12 * grossSalary;

    console.log(` The gross income of ${name} is ${annualGross} `);
}
