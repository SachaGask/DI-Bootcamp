
function validateUnionType(value: any, allowedTypes: string[]): boolean {
  return allowedTypes.includes(typeof value);
}

const num = 42;
const str = "Hello";
const bool = true;
const obj = { key: "value" };
const arr = [1, 2, 3];
const undef = undefined;
const func = () => {};

console.log(validateUnionType(num, ["number"]));
console.log(validateUnionType(str, ["number", "string"]));
console.log(validateUnionType(bool, ["string"]));
console.log(validateUnionType(obj, ["object"]));
console.log(validateUnionType(arr, ["object"]));
console.log(validateUnionType(func, ["function"]));
console.log(validateUnionType(num, ["string", "boolean"]));
