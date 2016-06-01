// http://angular-translate.github.io/docs/#/guide/14_pluralization
// http://userguide.icu-project.org/formatparse/messages

var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
  $translateProvider.preferredLanguage('en');
  $translateProvider.addInterpolation('$translateMessageFormatInterpolation');

  $translateProvider.translations('en', {
    HEADLINE: 'I\'m a headline',
    TEXT: 'I\'m using default interpolation {{ val + val }}',
    GENDER: '{GENDER, select, male{He} female{She} other{They}} liked this.',
    PLURAL: '{NUMBER, plural, =0{no results} one{1 result} other{# results} }',
    BUTTON_LANG_EN: 'English',
    BUTTON_LANG_DE: 'German'
  });

  $translateProvider.translations('de', {
    HEADLINE: 'Ich bin eine Überschrift',
    TEXT: 'Ich benutze default interpolation {{ val + val }}',
    GENDER: '{GENDER, select, male{Er fand} female{Sie fand} other{Sie fanden}} es gut.',
    PLURAL: '{NUMBER, plural, =0{keine erfinden} one{1 erfinde} other{# erfinden} }',
    BUTTON_LANG_EN: 'Englisch',
    BUTTON_LANG_DE: 'Deutsch'
  });
}]);

app.controller('Ctrl', ['$translate', '$scope', function($translate, $scope) {

  $scope.changeLanguage = function(langKey) {
    $translate.use(langKey);
  };
}]);
