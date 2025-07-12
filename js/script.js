(function ($, Drupal) {
  Drupal.behaviors.admin_theme = {
    attach: function (context, settings) {
      console.log("Custom theme JS loaded.");
    }
  };
})(jQuery, Drupal);
