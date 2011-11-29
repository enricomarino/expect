var test = function (context, undefined) {

    function Test (value) {
        return !!!value;
    }

    return {
        Test: Test
    };

}(this));