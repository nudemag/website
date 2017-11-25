module.exports = (req, res) => {

  const context = Object.assign(req.context, {
    issue: req.context.issues.find(issue => issue.permalink === '/' + req.params.permalink)
  })

  console.log(context)

  res.render('issue', req.context)
}
