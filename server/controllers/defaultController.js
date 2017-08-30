import defaultService from '../services/defaultService'

const index = async(req, res) => {
  const data = await defaultService.foo()

  res.success({
    data,
    num: Math.random() * 100,
    message: 'I am a server route and can also be hot reloaded'
  })
}

export default { index }
