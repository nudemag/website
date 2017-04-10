NodeList.prototype.forEach = Array.prototype.forEach

$(init)

function init () {
  detectLocation()
}

function detectLocation () {
  $.getJSON('https://ipinfo.io', function (ipinfo) {
    var form = document.querySelector('#contact')
    form.querySelectorAll('[data-source]').forEach(function (input) {
      input.value = ipinfo[input.dataset.source]
    })
  })
}
