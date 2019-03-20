// 从1循环到 50跳出 7 7 的倍数和包含7的数字？

for(let i  = 0; i <= 50; i++) {
    if( 
        i &&  // => 0 % 7  = 0 排除 0 
        i % 7 == 0  ||
        String(i).indexOf('7')!== -1
    ) {
        continue;
    }
    console.log(i)
}
