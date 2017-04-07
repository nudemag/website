var ipinfo

$(init)

function init () {
  detectLocation()
}

function detectLocation () {
  $.getJSON('http://ipinfo.io', function (ipinfo) {
    var fields = ['city', 'state', 'zip', 'ip', 'loc']
    fields.forEach(function (field) {
      document.querySelector('#contact input[name=' + field ']').value = ipinfo[field]
    })
  })
}
