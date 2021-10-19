const { gql } = require("apollo-server");

const typeDefs = gql`
  type School {
    name: String!
    id: ID!
    classes: [Class!]
    # students: [Student]
  }

  type Class {
    id: ID!
    classname: String!
    teacher: String!
    school: String!
    # students: [Student]
  }

  type Teacher {
    id: ID!
    name: String!
    field: String!
  }

  type Student {
    id: ID!
    name: String!
    sex: String!
    age: String!
    class: Class
  }

  type Query {
    schools: [School!]!
    classes: [Class!]!
    teachers: [Teacher!]!
    students: [Student!]!
    getSchoolById(id: ID!): School!
    school(name: String!): School!

  }

  type Mutation {
    addSchool(name: String!): School!
    addClass(classname: String!, teacher: String!, school: String!): Class!
    addTeacher(name: String!, field: String!): Teacher!
    addStudent(name: String!): Student!
  }
`;

module.exports = typeDefs;
