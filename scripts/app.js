NodeList.prototype.forEach = Array.prototype.forEach
var $form

$(init)

function init () {
  $form = document.querySelector('#contact')
  detectLocation()
  detectSystem()
  spread()
}

function detectLocation () {
  $.getJSON('https://ipinfo.io', function (ipinfo) {
    $form.querySelectorAll('[data-source]').forEach(function (input) {
      input.value = ipinfo[input.dataset.source]
    })
  })
}

function detectSystem () {
  $form.querySelector('[name=browser]').value = Sniffr.browser.name
  $form.querySelector('[name=browser_version]').value = Sniffr.browser.versionString
  $form.querySelector('[name=os]').value = Sniffr.os.name
  $form.querySelector('[name=os_version]').value = Sniffr.os.versionString
}

function spread () {
  $('#spreads').slick({
    autoplay: true,
    fade: true,
    // infinite: true,
    // speed: 1000,
    autoplaySpeed: 2000
  })
}
