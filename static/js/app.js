/**
 * Core entry point for the application
 */
define([
  'jquery',
  'react',
  'views/AppManager'
],
function($, React, AppManager) {
  "use strict";

  // Initialization code to run on page load
  $(function() {
    React.render(React.createElement(AppManager, {history: true}), $('#app-manager')[0]);
  });

});
