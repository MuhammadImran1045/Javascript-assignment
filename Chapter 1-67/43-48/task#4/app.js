var clicks = 0;
    function onClick1() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    function onClick2() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };