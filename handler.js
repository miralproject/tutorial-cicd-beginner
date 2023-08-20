const express = require('express')
const router = express.Router()

exports.employee = (res, req) => {
  res.send("Employee")
}