export const apiErrorHandler = (error, req, res, next) => {
  res.status(500).send(error.message || error.toString())
}
