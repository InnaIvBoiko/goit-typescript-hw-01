type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
};

function compare<T extends AllType, B extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<B, keyof AllType>): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
};
  
// function compare(top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
//     return {
//       name: top.name,
//       color: top.color,
//       position: bottom.position,
//       weight: bottom.weight,
//     };
// };

// const t: AllType = {
//     name: 'Sara',
//     position: 24,
//     color: 'red',
//     weight: 34
// };
 
// const b: AllType = {
//     name: 'Max',
//     position: 42,
//     color: 'green',
//     weight: 5
// };
 
// console.log(compare(t, b));
// console.log(compare(b, t));