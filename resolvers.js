const SchoolModel = require("./models/school.model");
const ClassModel = require("./models/class.model");
const TeacherModel = require("./models/teacher.model");
const StudentModel = require("./models/student.model");

const resolvers = {
  Query: {
    schools: async () => {
      return await SchoolModel.find();
    },
    classes: async () => {
      return await ClassModel.find();
    },
    teachers: async (parent) => {
      const teacher = await TeacherModel.find();

      return teacher;
    },
    students: async () => {
      const student = await StudentModel.find();

      return student;
    },
    school: async (parent, { name }, ctx) => {
      return await SchoolModel.findOne({ name });
    },
    getSchoolById: async (parent, { id }, ctx) => {
      return await SchoolModel.findById(id);
    },
  },
  School: {
    classes: (parent, args, ctx) => {
      return parent.name === classes.school;
    },
  },

  // Class: {
  //   teachers: async (parent, args, ctx) => {
  //     console.log(parent);
  //   },
  // },

  Mutation: {
    addSchool: async (parent, { name }, ctx) => {
      const school = new SchoolModel({ name });
      await school.save(() => {
        console.log("school added");
      });

      return school;
    },
    addClass: async (parent, { classname, teacher, school }, ctx) => {
      const classes = new ClassModel({ classname, teacher, school });
      await classes.save(() => {
        console.log("class added");
      });

      return classes;
    },
    addTeacher: (parent, { name, field }, ctx) => {
      const teacher = new TeacherModel({ name, field });

      teacher.save(() => {
        console.log("teacher added");
      });

      return teacher;
    },
    addStudent: async (parent, { name }, ctx) => {
      const student = new StudentModel({ name });
      await student.save(() => {
        console.log("student added");
      });

      return student;
    },
  },
};

module.exports = resolvers;
