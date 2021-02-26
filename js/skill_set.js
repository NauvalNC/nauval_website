var resume = $("#resume");

function addSkill(name, value) {
    var item = "";
    item += '<div class="skill_meter">';
    item += '<p>' + name + '</p>';
    item += '<div class="skill_bar">';
    item += '<div class="skill_percentage" style="width:' + value + '%">';
    item += '<p class="skill_num">' + value + '%</p>';
    item += '</div>';
    item += '</div>';
    item += '</div>';
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

function displaySkillText(name, data) {
    var item = "";
    item += createSkillSet(name);
    item += "<ul>";
    for (var x = 0; x < data.length; x++) {
        item += "<li>" + data[x] + "</li>";
    }
    item += "</ul>";
    item += closeSkillSet();
    resume.append(item);
}

// Achievement
var acc = [
    "Sakura Science Exchange Program Japan 2018",
    "Game Programming Mages Institute of Excellence Singapore",
    "Gold Medalist Gat Creative Idea 2018 Binus University",
    "Mobile Game Dev Mages Institute of Excellence Singapore",
    "High Distinction Applied Android Programming Binus University",
    "Game and Web Dev Flatpastel Entmt. Excellent Predicate",
    "First Winner Techcomfest Programming Competition 2018",
    "Third Winner Web Design COMFEST 2017 Diponegoro University",
    "Sololearn Courses on C++, C#, Java, Swift, Js, Jquery, Php, and More"
];

// Skills
var skill = [
    {name: "Programming", value: 84},
    {name: "Networking", value: 75},
    {name: "3D Modelling", value: 85},
    {name: "2D Digital Art", value: 83},
];

// Programming
var prog = [
    {name: "C++", value: 75},
    {name: "C#", value: 85},
    {name: "Java", value: 85},
    {name: "Web Development Languages", value: 83},
];

// Software Development
var dev = [
    {name: "Android Studio", value: 82},
    {name: "Unity Engine", value: 85},
    {name: "Unreal Engine", value: 73},
    {name: "Java Desktop App (Netbeans)", value: 70},
];

// Software Experience
var exp = [
    {name: "Blender", value: 88},
    {name: "Clip Studio Paint", value: 85},
    {name: "Photoshop", value: 80},
    {name: "Any Text Editors", value: 85},
];

displaySkillText("Achievements, Certificates, and Certifications", acc);
displaySkillSet("Skills", skill);
displaySkillSet("Programming", prog);
displaySkillSet("Software Development", dev);
displaySkillSet("Software Experience", exp);
