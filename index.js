const handleBlurNumber = (noti, num) => {
    const name = num.id === "num1" ? "Số thứ nhất" : "Số thứ hai";
    const numHTML = `<span style="font-style: italic;">${name}<span>`;

    if (num.value === "") {
        noti.innerHTML = `Vui lòng nhập ${numHTML}`;
        return;
    }

    if (isNaN(num.value)) {
        noti.innerHTML = `${numHTML} không phải là số thực`;
        return;
    }

    noti.innerText = "";
};

const handleCalculate = (noti, num1, num2) => {
    const formula = document.querySelector("input[name=formulas]:checked");
    const result = document.getElementById("result");

    if (!formula) {
        noti.innerText = "Vui lòng chọn phép tính";
        return;
    }

    if (num1.value === "") {
        noti.innerText = "Vui lòng nhập số thứ nhất";
        return;
    }

    if (num2.value === "") {
        noti.innerText = "Vui lòng nhập số thứ hai";
        return;
    }

    if (isNaN(num1.value) || isNaN(num2.value)) {
        noti.innerText = "Vui lòng nhập đúng số thực";
        return;
    }

    switch (formula.value) {
        case "add":
            result.value = Number(num1.value) + Number(num2.value);
            break;
        case "sub":
            result.value = Number(num1.value) - Number(num2.value);
            break;
        case "mul":
            result.value = Number(num1.value) * Number(num2.value);
            break;
        case "div":
            if (Number(num2.value) === 0) {
                noti.innerText = "Số thứ hai phải khác 0";
                result.value = "";
                return;
            }
            result.value = Number(num1.value) / Number(num2.value);
            break;
        default:
            noti.innerText = "Vui lòng chọn phép tính";
            break;
    }

    noti.innerText = "";
};

const btn = document.getElementById("calculate");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const noti = document.getElementById("noti");

btn.addEventListener("click", () => handleCalculate(noti, num1, num2));
num1.addEventListener("blur", () => handleBlurNumber(noti, num1));
num2.addEventListener("blur", () => handleBlurNumber(noti, num2));
