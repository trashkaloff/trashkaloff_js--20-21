
'use strict';

(function ($) {

  $.fn.test = function () {

    var $button = $('input[type = "button"]');
    var $body = $('body');
    var answers = [];
    var correctAnswers = [];
    var correct = 0;
    var incorrect = 0;
    var result = void 0;
    var $modal = '<div class="modal"></div>';
    var $overlay = '<div class="overlay"></div>';
    function createModal() {
      $($overlay).insertBefore('form');
      $('body').append($modal);
      $('.overlay').on('click', function () {
        $('.overlay').detach();
        $('.modal').detach();
        $('input[type="radio"]:checked').removeAttr('checked');
      });
    };

    $button.on('click', function () {
      var checked = $('input[type="radio"]:checked').length;
      var $radio = $('input[type="radio"]:checked').next();
      var arr = [];
      var qs = void 0;

      if (checked != $('form p').length) {
        alert('Not all answers provided');
      } else {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = $radio[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            arr.push($radio[i]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        ;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i = _step2.value;

            answers.push(arr[_i]);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        ;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = questions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _i2 = _step3.value;

            qs = localStorage.getItem('question' + _i2);
            qs = JSON.parse(qs);
            correctAnswers.push(correct);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        ;

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = answers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _i3 = _step4.value;

            if (answers[_i3] == correctAnswers[_i3]) {
              correct++;
            };
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        ;
        if (correct > 5) {
          result = 'вы типичный програмист ';
        } else {
          result = 'вам нужна хорошая мотивация';
        };
        createModal();
        $('.modal').append('<p>' + 'Result' + ' ' + result + '</p>');
      }
      correctAnswers = [];
      answers = [];
      correct = 0;
      incorrect = 0;
    });
  };
})(jQuery);
