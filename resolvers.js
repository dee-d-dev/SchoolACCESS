const SchoolModel = require("./models/school.model");
const ClassModel = require("./models/class.model");

const resolvers = {
  Query: {
    schools: () => {
      return SchoolModel.find()
        .then((school) => {
          return school.map((s) => ({ ...s._doc }));
        })
        .catch((err) => {
          console.error(err);
        });
    },
    classes: () => {
      return ClassModel.find()
        .then((classes) => {
          return classes.map((c) => ({ ...c._doc }));
        })
        .catch((err) => {
          console.error(err);
        });
    },

    // classes: () => console.log("class"),
  },
  Mutation: {
    addSchool: (parent, { name }, ctx) => {
      const school = new SchoolModel({ name });
      school.save(() => {
        console.log("school added");
      });

      return school;
    },
    addClass: (parent, { classname }, ctx) => {
      const newClass = new ClassModel({ classname });
      newClass.save(() => {
        console.log("class added");
      });

      return newClass;
    },
  },
};

module.exports = resolvers;
