const mongoose = require("mongoose");

let db = mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  //   name: "Apple",
  rating: 10,
  review: "Peaches are so yummy",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const grapes = new Fruit({
  name: "Grapes",
  score: 10,
  review: "My mouth waters every time I think of them",
});

// grapes.save();

const person = new Person({
  name: "David",
  age: 24,
  //   favouriteFruit: pineapple,
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture",
// });

// // Fruit.insertMany([kiwi, orange, banana]);

Fruit.find()
  .then(function (fruits) {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(function (err) {
    console.log(err);
  });

Person.updateOne(
  { _id: "642c2e93521ec7f51326f672" },
  { favouriteFruit: grapes }
)
  .then(console.log("Successfuly updated the document"))
  .catch(function (err) {
    console.log(err);
  });

// Person.deleteOne({ _id: "642c1b542048aebc1741c071" })
//   .then(console.log("Successfuly deleted the document"))
//   .catch(function (err) {
//     console.log(err);
//   });

// Person.deleteMany({ name: "John" })
//   .then(console.log("Successfuly deleted the document"))
//   .catch(function (err) {
//     console.log(err);
//   });
