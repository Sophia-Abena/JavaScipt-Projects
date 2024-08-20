function calculate(){
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        window.alert('Error')
    }
}