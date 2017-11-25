module.exports = (req, res) => {
  req.context.issue = req.context.issues
    .find(issue => issue.permalink === '/' + req.params.permalink)

  res.render('music', req.context)
}
