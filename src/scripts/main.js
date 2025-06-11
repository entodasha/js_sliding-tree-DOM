'use strict';

const tree = document.querySelector('.tree');

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  span.append(...li.childNodes);

  li.append(span);
}

tree.onclick = function (e) {
  if (e.target.tagName === 'SPAN') {
    const childrenContainer = e.target.parentNode.querySelector('ul');

    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
    } 
  }
};
