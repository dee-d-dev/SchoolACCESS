const SchoolModel = require("./models/school.model");
const ClassModel = require("./models/class.model");
const TeacherModel = require("./models/teacher.model");
const StudentModel = require("./models/student.model");

const resolvers = {
  Query: {
    schools: async () => {
      return await SchoolModel.find()
        .then((school) => {
          return school.map((s) => ({ ...s._doc }));
        })
        .catch((err) => {
          console.error(err);
        });
    },
    classes: async () => {
      return await ClassModel.find()
        .then((classes) => {
          return classes.map((c) => ({ ...c._doc }));
        })
        .catch((err) => {
          console.error(err);
        });
    },
    teachers: async () => {
      const teacher = await TeacherModel.find()
        .then((teachers) => {
          return teachers.map((teacher) => ({ ...teacher._doc }));
        })
        .catch((err) => {
          console.error(err);
        });

      return teacher;
    },
    students: async () => {
      const student = await StudentModel.find()
        .then((students) => {
          return students.map((student) => ({ ...student._doc }));
        })
        .catch((err) => {
          console.error(err);
        });

      return student;
    },
    school: async (parent, { name }, ctx) => {
      // const school = await SchoolModel.find().then((schools) => {
      //   return schools.filter((s) => {
      //     if (s._doc.name === name) return { ...s._doc.name };
      //   });
      // });

      const school = await SchoolModel.findOne({name})

      return school;
    },
    getSchoolById: async(parent, {id}, ctx)=>{
      return await SchoolModel.findById(id)

    }
  },
  Mutation: {
    addSchool: async (parent, { name }, ctx) => {
      const school = new SchoolModel({ name });
      await school.save(() => {
        console.log("school added");
      });

      return school;
    },
    addClass: async (parent, { classname }, ctx) => {
      const classes = new ClassModel({ classname });
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
