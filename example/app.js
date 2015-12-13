import tiny from '../src/index';
import config from '../src/presets/basic';

const app = document.createElement('div');
document.body.appendChild(app);

const editor = document.createElement('textarea');
editor.setAttribute('id', 'editor');
editor.innerHTML = "Hello, World!";
app.appendChild(editor);

tiny.init(config({
    selector: '#editor'
}));
