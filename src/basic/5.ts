enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
};

const isWeekend = (day: DayOfWeek): boolean => {
    switch (day) {
        case DayOfWeek.Saturday:
        case DayOfWeek.Sunday:
            return true;
        default:
            return false;
    };
};

// console.log(isWeekend(DayOfWeek.Monday));
// console.log(isWeekend(DayOfWeek.Tuesday));
// console.log(isWeekend(DayOfWeek.Friday));
// console.log(isWeekend(DayOfWeek.Saturday));
// console.log(isWeekend(DayOfWeek.Sunday));