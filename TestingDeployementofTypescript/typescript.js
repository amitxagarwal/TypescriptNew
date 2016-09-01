function isPizza(food) {   // Error: Not all code paths return a value.
    if (food === "pizza") {
        return true;
    }
    else if (food === "pie") {
        return true;
    }
    // implicitly returns `undefined`
}