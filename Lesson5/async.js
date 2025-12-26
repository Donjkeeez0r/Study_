const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const cookDinner = async () => {
    try {
        const isGasOn = true;
        if (isGasOn === false) {
            throw new Error("Нет газа!");
        }

        console.log("Включаю плиту...");
        await sleep(1000);

        console.log("Режу овощи...");
        await sleep(2000);

        console.log("Варю суп...");
        await sleep(3000);

        console.log("Ужин готов!");
    } catch (error) {
        console.log("Ошибка на кухне: ", error)
    }
};

cookDinner();

// const cookDinner = async () => {
//     console.log("Включаю плиту...");
//     await sleep(1000);

//     console.log("Режу овощи...");
//     await sleep(2000);

//     console.log("Варю суп...");
//     await sleep(3000);

//     console.log("Ужин готов!");
// };

