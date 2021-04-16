import axios from "axios"

const baseUrl = `http://7e1a577ff6bd.ngrok.io/v1/infinity`

const instance = {
  headers: { "Content-Type": "application/x-www-form-urlencoded", "user-id": 1 },
  body:String(
    new URLSearchParams({
      type_id: '1'
    }))
  }


  const newInstance = axios.create({
    baseURL: `https://bfccd8d41208.ngrok.io/v1/infinity`,
    headers: {
      "Content-Type": "application/json",
      "user-id": '1'
    },
  
  })


export const fetchCurrencies  = async()=> {
  const newData = new URLSearchParams({
      type_id: "1",
  })
  const response = await newInstance.post(`/cards`,newData )
  return response.data
}


export const fetchListAllCards = async () => {
  const response = await axios.get(`${baseUrl}/cards`, instance)
  return response.data
}
export const fetchListAllCardsFake = async () => {
  const response = await axios.get(`http://localhost:3000/db`)
  return response.data
}
export const uploadCardData = async (card) => {
  const response = await axios.post(`http://localhost:3000/data`, card)
  return response.data
}



export const addNewCards = async () => {

      const response = await fetch(`https://bfccd8d41208.ngrok.io/v1/infinity/cards`, {
        method: "POST",
        body: String(
          new URLSearchParams({
            type_id: '1'
          })
        ),
        headers: {
          "user-id": '1' ,
          "Content-Type": "application/x-www-form-urlencoded",
        }}
        )

        const data = await response.json()

        return data
    }
export const fetchListCardTypes = async () => {

      const response = await fetch(`http://7e1a577ff6bd.ngrok.io/v1/infinity/cardtypes`, {
        method: "GET",
        headers: {
          "user-id": '1' ,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      
      }
        )

        const data = await response.json()

        return data
    }


    export const fetchListCardTypesFake = async () => {
      const response = await axios.get(`http://localhost:3000/db`)
      return response
    }



/* 
export const fetchListCardTypes = async () => {
  const response = await newInstance.get(`${baseUrl}/cardtypes`)
  return response.data
} */

