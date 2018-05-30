export default function getDayMonth() {
    var today = new Date();
    var day = today.getDate();
    day = parseInt(day) < 10 ? '0' + day : day;
    var month = today.getMonth();
    month = parseInt(month) + 1;
    month = month < 10 ? ('0' + month).toString() : month.toString();
    today = day + '.' + month
    return today;
}