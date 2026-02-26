// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !

/**
 * ? function sayHello(target: { firstName: string, money: true }): number {
 * ?    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
 * ? }
 * ? const message: boolean = sayHello({ firstname: 'World', money: 123 });
 */


// ! RÈPONSE PROPRE
// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !

function sayHello(target: { firstname: string, money: number }): string {
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
 }
 const message: string = sayHello({ firstname: 'World', money: 123 });
 console.log(message);