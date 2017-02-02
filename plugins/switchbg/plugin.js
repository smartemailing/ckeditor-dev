/**
 * Created with JetBrains PhpStorm.
 * User: martin
 * Date: 23.05.13
 * Time: 0:30
 * To change this template use File | Settings | File Templates.
 */

CKEDITOR.plugins.add('switchbg', {
    init: function(editor) {
        var pluginName = 'switchbg';
        editor.addCommand(pluginName, CKEDITOR.plugins.switchbg);
        editor.ui.addButton('SwitchBG', {
            label: 'Switch Background Color',
            command: pluginName,
            icon: this.path + 'images/switchbg.png'
        });
    }
});

CKEDITOR.plugins.switchbg = {
    exec: function(editor) {
        editor.getColorFromDialog(function(c) {
            var element = editor.document.getBody();
            element.setStyle('background-color', c);
        });
    }
};

