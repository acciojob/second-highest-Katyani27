//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let firstHighest = -Infinity;
    let secondHighest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstHighest) {
            secondHighest = firstHighest;
            firstHighest = arr[i];
        } else if (arr[i] > secondHighest && arr[i] !== firstHighest) {
            secondHighest = arr[i];
        }
    }
    
    return secondHighest;
}
