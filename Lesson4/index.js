// task 2

const ages = [10, 18, 55, 3, 20];

const checkAccess = (age) => {
    
    for (const age of ages) {
        if (age >= 18) {
            console.log(`Возраст ${age}: Доступ разрешен!`);
        } else {
            console.log(`Взораст ${age}: Доступ запрещен!`);
        }
    };
}

checkAccess(ages);