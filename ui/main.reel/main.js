
var Component = require("montage/ui/component").Component;

exports.Main = Component.specialize({

    constructor: {
        value: function Main() {
        }
    },

    handleAddButtonAction: {
        value: function (event) {
            event.target.repetition.content.splice(event.target.index + 1, 0, {});
        }
    },

    handleRemoveButtonAction: {
        value: function (event) {
            event.target.repetition.content.splice(event.target.index, 1);
        }
    },

    handleAddFirstButtonAction: {
        value: function (event) {
            event.target.repetition.content.unshift({});
        }
    }

});

