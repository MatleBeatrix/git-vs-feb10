//write the code here
window.onload = () => {
    const flashes = document.querySelectorAll('.flash');
    setInterval(() => {
        for (const flash of flashes) {
            flash.classList.toggle('red');
        }
    }, 1000)
}