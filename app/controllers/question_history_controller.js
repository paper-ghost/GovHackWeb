// Filename: models/project
define([
  'jquery',
  'underscore',
  'views/question_view'
], function($, _, QuestionView) {
  var QuestionHistoryController = (function () {

    var target = "#question-history";

    var reflectHistory = function(model) {
      var index = 0;
      $(target).empty();
      _.each(Object.keys(model.attributes["answered"]), function(key) {
        var matching_q = null;
        _.each(QUESTIONNAIRES, function(q_obj) {
          if (q_obj.key == key)
            matching_q = q_obj;
        })
        var view = new QuestionView();
        view.model     = matching_q;
        view.set_value = model.attributes["answered"][key];
        view.eventHandler = QuestionHistoryController.handleHistoryChange;

        var z_index = 100 - index;
        var placeholder = $("<div class=\"history_item\" id=\"history-" + key + "\" style=\"z-index: " + z_index +"\"></div>");
        placeholder.appendTo($(target));
        view.el = placeholder;
        view.render();

        index++;
      });
    }

    return {
      target:              target,
      reflectHistory:      reflectHistory,
      views:  []
    }

  })();

  return QuestionHistoryController
});