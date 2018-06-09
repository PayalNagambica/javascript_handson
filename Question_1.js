function filter_array(array) {
    var index = -1,
        arr_length = array ? array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([10, NaN, false, -2, '',undefined,"", 87, null, "Hello", true]));

