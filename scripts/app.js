var ipinfo

$(init)

function init () {
  detectLocation()
}

function detectLocation () {
  $.getJSON('https://ipinfo.io', function (ipinfo) {
    var fields = ['city', 'state', 'zip', 'ip', 'loc']
    fields.forEach(function (field) {
      var input = document.querySelector('#contact input[name=' + field + ']')
      input.value = ipinfo[field]
    })
  })
}
