const xhr = new XMLHttpRequest();
xhr.onload = function() {
    if (this.status == 200) {
        try {
            const responseOBJ = JSON.parse(this.responseText);
            console.log(responseOBJ);
            const array1 = Object.keys(responseOBJ);
            const array2 = Object.values(responseOBJ);
            document.write('parameters: <i>' + array1, '</i><br>values: <i>' + array2 + '</i>');

        } catch (e) {
            console.warn('there is an error in the JSON. can\'t parse.');
            document.write('there is an error in the JSON. can\'t parse.');
        }

    } else {
        console.warn("Did not receive 200 OK.");
        document.write('Did not receive 200 OK.');

    }
};

xhr.open('GET', 'data.json');
xhr.send();