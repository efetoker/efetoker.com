getRandomName = (namesArray) => {
    let randomIndex = Math.floor(Math.random() * names.length);
    return namesArray[randomIndex];
};

setColonist = (colonist) => {
    $('#colonist_name').val(colonist.name);
    $('#colonist_middle_name').val(colonist.middle_name);
    $('#colonist_surname').val(colonist.surname);
};

randomizeColonist = () => {
    let colonist = {
        name: getRandomName(names).name,
        middle_name: getRandomName(names).middle_name,
        surname: getRandomName(names).surname
    };

    setColonist(colonist);
};

$(() => {
    names = [];

    $.getJSON('assets/data/names.json', (data) => {
        names = data;

        let colonist = {
            name: getRandomName(names).name,
            middle_name: getRandomName(names).middle_name,
            surname: getRandomName(names).surname
        };

        setColonist(colonist);
    });

    $('#colonist_generate').on('click', () => {
        randomizeColonist();
    });
})