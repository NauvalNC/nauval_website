var resume = $("#resume");

function addSkill(name, value) {
    var item = "";
    item += '<div class="skill_meter">';
    item += '<p>' + name + '</p>';
    item += '<div class="skill_bar">';
    item += '<div class="skill_percentage">';
    item += '<p class="skill_num">' + value + '%</p>';
    item += '</div>';
    item += '</div>';
    item += '</div>"';
    return item;
}

function createSkillSet(name) {
    var item = "";
    item += '<div class="skill_set">';
    item += '<p><b>' + name + '</b></p>';
    return item;
}

function closeSkillSet() {
    return '</div>';
}

function displaySkillSet(name, data) {
    var item = "";
    item += createSkillSet(name);
    for (var x = 0; x < data.length; x++) {
        item += addSkill(data[x].name, data[x].value);
    }
    item += closeSkillSet();
    resume.append(item);
}

var prog = [
    {name: "C++", value: 75},
    {name: "C#", value: 85},
    {name: "Java", value: 85},
    {name: "Web Development Language", value: 83},
];

displaySkillSet("Programming", prog);
