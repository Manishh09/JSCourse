const select = document.querySelector('select');
const p = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const opt = select.value;
    console.log("listener -> opt", opt);

    switch (opt) {
        case 'sunny':
            p.textContent = 'Sunny weather outside todday!';
            break;
        case 'rainy':
            p.textContent = 'Rainy weather outside today';
            break;
        default:

            p.textContent = '';
            console.log(true, undefined);
        // You don't have to include the default section —
        //you can safely omit it if there is no chance that the expression could end up equaling an unknown value.
        //If there is a chance of this, however, you need to include it to handle unknown cases.


    }

}