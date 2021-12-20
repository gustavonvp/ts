
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

const  numberHolder = new ValueHolder<number>();
numberHolder.value;


new ValueHolder<String>();
new ValueHolder<Boolean>();