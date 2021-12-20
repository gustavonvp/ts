
class NumberHolder {
    value: number;
}

class StringHolder {
    value: string;
}

class BooleanHolder {
    value: boolean;
}

// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

const stringHolder = new StringHolder();
stringHolder.value = 'A string';

const booleanHolder = new BooleanHolder();
booleanHolder.value = true;

class ValueHolder<T> {
    value: T;
}



const numberWrapper = (value: number): number[] => {
    return [value];
};

const stringWrapper = (value: string): string[] => {
    return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
    return [value];
};


const valueWrapper = <T>(value: T): T[] => {
    return [value];
};

const value = valueWrapper<string>('paca');

valueWrapper<number>(10);
valueWrapper<boolean>(false);

const  numberHolder = new ValueHolder<number>();
numberHolder.value;


new ValueHolder<String>();
new ValueHolder<Boolean>();