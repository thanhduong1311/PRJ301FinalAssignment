$(function () {
    $(".moocTitles").sortable({
        placeholder: "drag-location",
        handle: ".mooc-handle",
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        }
    });
});

$(function () {
    $(".lessonTitles").sortable({
        placeholder: "drag-location",
        handle: ".lesson-handle",
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        }
    });
});