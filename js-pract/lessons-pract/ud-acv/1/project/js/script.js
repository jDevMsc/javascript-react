let  open = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    employers_btn = document.getElementsByTagName('button')[3],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item');

    let money,
    shopName,
    price;

open.addEventListener('click', () => {
    let timerId = setTimeout(start, 2000);
    
});

function start() {
    money  = +prompt("Ваш бюджет", "");
    while(isNaN(money) || money =='' || money == null) {
       money  = +prompt("Ваш бюджет", "");
       mainList.budget = money;
    }
    mainList.budget = money;
    budget_value.textContent = money;
    shopName = prompt("Название вашего магазина","").toLocaleUpperCase();
    name_value.textContent = shopName;
    mainList.shopName = shopName;
}

goods_btn.addEventListener('click', () => {
    for(let i = 0; i<goods_item.length; i++) {
        let a = goods_item[i].value;
        if((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50){
            mainList.shopGoods[i] = a;
            goods_value.textContent = mainList.shopGoods;
        } else {
            i = i -1;
        }
    }
});
//продукты
choose_item.addEventListener('change', () => {
    let items = choose_item.value;
    if(isNaN(items) && items != '' ) {
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();
        items_value.textContent = mainList.shopItems;
    }
});
//время
time_value.addEventListener('change', () => {
    let time = time_value.value;
    if(time < 0) {
        console.log("Такого ен может быть");
        mainList.open = false;
    } else if(time > 8 && time < 20){
        console.log("Время работать");
        mainList.open = true;
    } else if(time < 24) {
        console.log("Уже слишком похдно");
        mainList.open = false;
    }

    if(mainList.open) {
        isopen_value.style.backgroundColor = 'green';
    } else {
        isopen_value.style.backgroundColor = 'red';
    }
});

//дневной бюджет
budget_btn.addEventListener('click', () => {
    count_budget_value.value = money / 30;
})

employers_btn.addEventListener('click', () => {
    for(let i = 0; i < hire_employers_item.length; i++) {
        let name = hire_employers_item[i].value;
            mainList.empoyees[i] = name;
          employers_value.textContent += mainList.empoyees[i] + ", ";
    }
})


const mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    empoyees : [],
    open: true,
    discount: false,
    shopItems: [],
    makeDiscount: function makeDiscount() {
                if(mainList.discount == true) {
                    price = (price/100) * 80;
                }
            }
};
