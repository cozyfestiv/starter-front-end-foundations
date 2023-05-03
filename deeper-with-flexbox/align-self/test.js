function getFoo () {
  return axios.get('/foo').then(response => {
    return response.number
  })
}

async function getFoo () {
  const response = await axios.get('/foo')
  return response.number
}

function doubleFoo (number) {
  return axios.post('/foo', { number }).then(response => response.double)
}
