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

export async function getAllQuestions() {
  return await axios.get(questionsPath)
}

export function postNewQuestion(question, userData) {
  question.authorid = userData
  return axios.post(questionsPath, question)
}

export function voteQuestion(question, userData) {
  question.userid = userData
  return axios.post(`${questionsPath}/${question._id}`, question)
}

export function updateStatus(question, userData, newStatus) {
  question.userid = userData
  question.status = newStatus
  return axios.put(`${questionsPath}/status/${question._id}`, question)
}

// export async function seenQuestion(question, userData) {
//   question.userid = userData
//   return await axios.post(`${questionsPath}/seen/${question._id}`, question)
// }

export async function updateSeen(questions, userData) {
  questions.userid = userData
  return await axios.put(`${questionsPath}/update/`, {
    questions,
    userid: userData,
  })
}
