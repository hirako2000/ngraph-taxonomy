export default formatNumber;

function formatNumber(x) {
    if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else return "0";
}
