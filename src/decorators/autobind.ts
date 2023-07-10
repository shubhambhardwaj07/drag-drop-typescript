namespace App {
  //autobind decorator
  export function autobind(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target, methodName, descriptor);
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjustedDescriptor;
  }
}
