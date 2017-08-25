async function foo() {
  return 'async working!'
}

const index = async(req, res) => {
  const data = await foo()

  res.success({
    data,
    num: Math.random() * 100,
    message: 'I am a server route and can also be hot reloaded'
  })
}

export default { index }
