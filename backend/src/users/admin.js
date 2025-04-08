// // create-admin.js
// const mongoose = require('mongoose');
// const User = require('./user.model'); // adjust the path as necessary
// require('dotenv').config();

// async function createAdmin() {
//   await mongoose.connect(process.env.MONGODB_URI); // Replace with your MongoDB connection string

//   const existing = await User.findOne({ username: 'admin' });
//   if (existing) {
//     console.log('Admin already exists');
//     return mongoose.disconnect();
//   }

//   const admin = new User({
//     username: 'admin',
//     password: 'admin123',
//     role: 'admin'
//   });

//   await admin.save();
//   console.log('Admin created successfully');
//   mongoose.disconnect();
// }

// createAdmin();

const mongooose = require("mongoose");
const User = require("./user.model");
const env = require("dotenv");
env.config();

async function createAdmin() {
  await mongooose.connect(process.env.DB_URL);
  try {
    const existingUser = await User.findOne({ username: "admin" });
    if (existingUser) {
      console.log("Admin already exists");
      return mongooose.disconnect();
    }
    const admin = new User({
      username: "admin",
      password: "admin123",
      role: "admin",
    });
    await admin.save();
    console.log("Admin created successfully");
    mongooose.disconnect();
  } catch (error) {
    console.error("Error in connecting to the mongoose in admin file", error);
    return mongooose.disconnect();
  }
}

createAdmin();
