function dayOfProgrammer(year) {
    
    const dayOfTheProgramer = 256;

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let month = 0;
    let day = 0;

    if (!year) return -1;

    let totalYearDays = 0;
    // check leap years
    if (year >= 1919) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) { // gregorian
            daysInMonth[1] = 29;
        }
    }
    else if (year != 1918 && (year % 4 === 0)) { // julian   
        daysInMonth[1] = 29;        
    }
    else if (year == 1918){
        daysInMonth[1] = 15;
    }


    for (let i = 0; (i < 12 && totalYearDays < dayOfTheProgramer); i++) {
        totalYearDays += daysInMonth[i];

        if (totalYearDays >= dayOfTheProgramer) {
            month = i + 1;
            day = dayOfTheProgramer - totalYearDays + daysInMonth[i];
        }
    }

    //console.log(month.toString().padStart(2, '0'));
    //console.log(day.toString().padStart(2, '0'));

    return (day.toString().padStart(2, '0') + '.' + month.toString().padStart(2, '0') + '.' + year);

}

console.log(dayOfProgrammer(1918));