type hv ={
    hinh: "vuong",
    canh: number,
}
type ht ={
    hinh: "tron",
    canh: number,
}
function calculateArea (num :hv|ht){
    if (num.hinh =="vuong"){
        return num.canh*num.canh;
    }else if (num.hinh =="tron"){
     return Math.PI*num.canh*num.canh;
    }
}
