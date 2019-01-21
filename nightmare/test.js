// 自动化测试
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});

const header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
};

nightmare
    .goto('https://www.quandashi.com/',header)
    .cookies.set({
        name: 'QDS_COOKIE',
        value: 'dc333040cb10bedfc4694a21afc216612914bd1b'
    })
    .wait(function () {
        localStorage.setItem('r-help', true);
        return true
    })
    .goto('https://www.quandashi.com/product-buy/PC10003.html')
    .type('[name=brandName]', '小米')
    .click('.getBrandPic')
    .wait(function () {
        let value = $("[name=createbrandpic]").val();
        if(value != ''){
            return true
        }
    })
    .wait(function () {
        $(".industry-select-list").show();
        $(".industry-select-list .i-left span").eq(0).mouseover();
        if($(".industry-select-list .i-right span").length > 0){
            $(".industry-select-list .i-right span").eq(0).click();
        }else{
            return false;
        }
        return true;
    })
    .wait(function () {
        if($(".crs-left a").length > 0){
            return true;
        }
    })
    .evaluate(() => $("[name=brandName]").val())
    .click('.submitorder')
    .then(console.log)
    .catch(error => {
        console.log(error);
    });