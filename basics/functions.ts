import { ECANCELED } from "constants";

//               return type goes here V
function addNumbers(a:number,b:number): number {
    return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = "default"): string=> `${str1} ${str2}`;

export const format = (title: string, param: string | number) => `${title} ${param}`;

export const printFormat = (title: string, param: string | number) => {
    console.log(format(title,param))
};

export const fetchData = (url: string) => Promise.resolve(`Data from ${url}`);

function introduce (salutation: string, ...names: string[]): string{
    return `${salutation} ${names.join(' ')}`
}