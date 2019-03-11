import axios from 'axios'
const IP = process.env.REACT_APP_BACKEND_IP
const questionsPath = `http://${IP}:4000/questions`

export function getDataFromStorage() {
  return getFromStorage('questions') || []
}

export function saveDataToStorage(questions) {
  saveToStorage('questions', questions)
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

export function voteQuestion(question) {
  if (question.liked) {
    return axios.patch(`${questionsPath}/${question._id}`, {
      ...question,
      votes: question.votes - 1,
    })
  } else {
    return axios.patch(`${questionsPath}/${question._id}`, {
      ...question,
      votes: question.votes + 1,
    })
  }
}
