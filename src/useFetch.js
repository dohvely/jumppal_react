import { useState, useEffect } from 'react'

function useFetch({url, param}) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    window
      .fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        },
        // POST일때만
        // body: JSON.stringify(param)
      })
      .then((response) => response.json())
      .then((response) => {

        setData(response)
        setLoading(false)
      })
      .catch((error) => {

        setError(error)
        setLoading(false)
      })
  }, [url])

  return { loading, data, error }
}

export default useFetch