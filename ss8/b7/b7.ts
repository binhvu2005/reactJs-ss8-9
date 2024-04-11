type c=object;
type b=any[];
type a=number;
type d=a&b&c
function check(num:d) {
    console.log(typeof num);
}


