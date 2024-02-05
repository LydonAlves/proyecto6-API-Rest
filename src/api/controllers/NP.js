const NPark = require('../models/NP')
const express = require('express')

const router = express.Router()

const getNPs = async (req, res, next) => {
  console.log('Fetching all national parks...')
  try {
    const allNPs = await NPark.find()
    console.log('National Parks found:', allNPs)
    return res.status(200).json(allNPs)
  } catch (error) {
    return res.status(400).json('The petition has failed')
  }
}

const getNPByID = async (req, res, next) => {
  const { id } = req.params
  try {
    const parkByID = await NPark.findById(id)
    if (parkByID) {
      return res.status(200).json(parkByID)
    } else {
      return res.status(404).json('No National Park found')
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

const addNewNP = async (req, res, next) => {
  try {
    const newNP = new NPark(req.body)
    const NPSaved = await newNP.save()
    return res.status(201).json(NPSaved)
  } catch {
    return res.status(400).json('Request failed')
  }
}

const updateNP = async (req, res, next) => {
  try {
    const { id } = req.params
    const newNP = new NPark(req.body)
    newNP._id = id
    const update = await NPark.findByIdAndUpdate(id, newNP, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteNP = async (req, res, next) => {
  try {
    const { id } = req.params
    const NPDeleted = await NPark.findByIdAndDelete(id)
    return res.status(200).json(NPDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = { getNPs, getNPByID, addNewNP, updateNP, deleteNP }
