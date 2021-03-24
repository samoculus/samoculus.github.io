setInterval(() => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerHTML = new Date().toLocaleDateString(undefined, options) + ' ∞ ' + new Date().toLocaleTimeString();
});