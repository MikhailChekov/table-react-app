const LONG_REQ = 'https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const SHORT_REQ = 'https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const PAGE_SIZE = 50;
const SELECT_OPT = [
    {
        value: 'short',
        label: 'Короткий вариант (32 значения)'
    },
    {
        value: 'long',
        label: 'Длинный вариант (1000 значений)'
    }
];

export {
    LONG_REQ,
    SHORT_REQ,
    SELECT_OPT,
    PAGE_SIZE,
}
