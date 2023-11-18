document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.footer_form-block');
    if (form) {
      form.addEventListener('submit', function(event) {
        // Assuming '.footer_form-block' is the form class
        var header = document.querySelector('.footer_header-form');
        var formElements = document.querySelector('.footer_form');
        var privacyText = document.querySelector('.footer_privacy-form');
        if (header) header.style.display = 'none';
        if (formElements) formElements.style.display = 'none';
        if (privacyText) privacyText.style.display = 'none';
      });
    }
  });
