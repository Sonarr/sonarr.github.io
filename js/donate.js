(function($) {
  var donationAmount = $('#donation-amount');
  var currency = 'usd';
  var key = 'pk_test_aKr8O3jA8gVWltZ9dxzEl8qF';
  var chargeApi = 'https://services.sonarr.tv/v1/payments/stripe/charge';
  var chargeAmount = 0;

  function getAmount() {
    var text = donationAmount.val();
    var amount = parseFloat(text);
    donationAmount.toggleClass('invalid', !amount);
    return amount;
  }

  function createCharge(options) {
    $.ajax({
      type: "POST",
      url: chargeApi,
      data: options,
      dataType: 'json'
    });
  }

  donationAmount.on('keyup', function(e){
    getAmount();
  });

  var handler = StripeCheckout.configure({
    key: key,
    image: '/img/logo-256.png',
    locale: 'auto',
    token: function(token) {
      createCharge({
        token: token.id,
        currency: currency,
        amount: chargeAmount
      });
    }
  });

  $('#donate-stripe').on('click', function(e) {
    chargeAmount = getAmount() * 100;
    if (chargeAmount) {
      handler.open({
        name: 'sonarr.tv',
        description: 'Support Sonarr',
        currency: currency,
        amount: chargeAmount
      });
    }
    e.preventDefault();
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });

}(jQuery));
