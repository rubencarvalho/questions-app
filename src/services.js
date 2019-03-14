import axios from 'axios'
import uid from 'uid'
//const ip = process.env.REACT_APP_BACKEND_IP
//const questionsPath = `http://${ip}:4000/questions`
const questionsPath = `http://localhost:4000/questions`

export function getDataFromStorage() {
  return getFromStorage('questions') || []
}

export function saveDataToStorage(questions) {
  saveToStorage('questions', questions)
}

export function saveUserDataToStorage(userid) {
  saveToStorage('userid', userid)
}

export function getUserDataFromStorage() {
  return getFromStorage('userid') || uid()
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}

export function getAllQuestions() {
  return axios.get(questionsPath)
}

export function postNewQuestion(question) {
  return axios.post(questionsPath, question)
}

export function voteQuestion(question, userData) {
  question.authorid = userData
  return axios.post(`${questionsPath}/${question._id}`, question)
}
