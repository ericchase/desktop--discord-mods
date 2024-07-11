//
//
//

const id = setInterval(setup, 1000);
function setup() {
  if (document && 'querySelector' in document) {
    clearInterval(id);

    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(`
/*   Channel List Minification    */
/*   User List Minification (x2)  */

[class*='chat_'] > [class*='content_'] > [class*='container_'] > [class*='membersWrap_'] > [class*='members_']:not(#fake) {
  width: 100%;
}

[class*='base_'] > [class*='content_'] > [class*='sidebar_']:not(#fake),
[class*='chat_'] > [class*='content_'] > [class*='container_'] > [class*='membersWrap_']:not(#fake) {
  min-width: 100px;
  max-width: 240px;
  transition-duration: 100ms;
  transition-property: width;
  width: 240px;
}

[class*='base_'] > [class*='content_'] > [class*='sidebar_']:not(#fake):hover,
[class*='chat_'] > [class*='content_'] > [class*='container_'] > [class*='membersWrap_']:not(#fake):hover {
  width: 240px;
}

/*   Hide Nitro Button In Chat          */
/*   Hide Nitro/Store In Friends List   */
[aria-label='Send a gift']:not(#fake),
[data-list-item-id*='___nitro']:not(#fake),
[data-list-item-id*='___shop']:not(#fake) {
  display: none;
}

@media (width <= 1250px) {
  [class*='base_'] > [class*='content_'] > [class*='sidebar_']:not(#fake),
  [class*='chat_'] > [class*='content_'] > [class*='container_'] > [class*='membersWrap_']:not(#fake) {
    width: calc(240px - calc(calc(1250px - 100vw) * 0.45));
  }
}
    `);
    document.adoptedStyleSheets.push(stylesheet);
  }
}
