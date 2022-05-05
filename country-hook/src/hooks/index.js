import { useState, useEffect } from "react"
import axios from 'axios'

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(response => {
        console.log(response);
        setCountry(response.data)
      })
  }, [name])

  return country


}