const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.alloc(10,1);
console.log(buf2);
const buf3 = Buffer.allocUnsafe(10);  //不重写内存
console.log(buf3);
const buf4 = Buffer.from([1,2,3]);
console.log(buf4);
const buf5 = Buffer.from('test','latin1');
console.log(buf5);

for(let b4 of buf4){
    console.log(b4);
}

const str5 = buf5.toString('base64');   //
console.log(str5);

