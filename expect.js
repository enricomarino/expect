var expect = (function (context, undefined) {

    function equal (value, expected) {
        return value == expected;
    }

    return {
        equal: equal
    };

}(this));