var widgets = document.getElementsByTagName('widget');

for (var i = 0; i < widgets.length; i++) {
  importWidget(widgets[i]);
}

function importWidget(widget) {
  var url = widgets[i].getAttribute('import');
  var content = readFile(url);
  var newNode = createWidget(content);
  widget.parentNode.replaceChild(newNode, widget);
}

function readFile(url) {
  var reader = new FileReader();
  var file = new File([], url);
  return reader.readAsText(file, 'utf8');
}

function createWidget(content) {
  var frag = document.createDocumentFragment();
  frag.innerHTML = content;
  return frag;
}