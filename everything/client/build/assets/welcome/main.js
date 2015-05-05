define(['jquery', './template'], function($, template) {
  return {
    render: function() {
      return $('body').html(template());
    }
  };
});
