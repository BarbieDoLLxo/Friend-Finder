function Friends ( name, profession, gender, age, interests) {
    this.friends = []
    this.name = name
    this.profession = profession
    this.gender = gender
    this.age = age
    this.interests = interests
    this.list = function(){
        console.log(`${name} is a ${profession} , they are a ${age} year old ${gender} and intersted in ${interests}`);

    }
}

var friend1 = new Friend ("Candy", "Dancer", "Male", "23", "Theatre, Fine Dining, and Golf ");
