const id = setInterval(setup, 1000);
function setup() {
  if (document && 'querySelector' in document) {
    clearInterval(id);

    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(`
      /* Channel List Minification */
      [class*='sidebar_']:not(#fake) {
        width: 100px;
      }
      [class*='sidebar_']:not(#fake):hover {
        width: unset;
      }

      /* Hide Nitro Button In Chat */
      [aria-label='Send a gift']:not(#fake) {
        display: none;
      }
    `);
    document.adoptedStyleSheets.push(stylesheet);
  }
}

// window.addEventListener('keypress', async (evt) => {
//   if (evt.key === 'Enter') {
//     const textbox = document.querySelector('[role="textbox"]');
//     let node = textbox;
//     while (node && node.firstChild) {
//       node = node.firstChild;
//     }
//     await encrypt(iCommand.value, state.key, state.iv);
//     console.log('Text:', node?.textContent);
//   }
// });

function Channel_List_Minification() {
  const elem = /** @type {HTMLElement} */ (document.querySelector('[class*=sidebar]'));
  if (elem) {
    console.info('Found channel list!');
    elem.addEventListener('mouseover', () => {
      elem.style.removeProperty('width');
    });
    elem.addEventListener('mouseout', () => {
      elem.style.width = '100px';
    });
    elem.style.width = '100px';
    clearInterval(id);
  } else {
    console.warn('Error: Could not find channel list!');
    setTimeout(Channel_List_Minification, 1000);
  }
}
function Hide_Nitro_Button_In_Chat() {
  const elem = /** @type {HTMLElement} */ (document.querySelector('[aria-label="Send a gift"]'));
  if (elem) {
    console.info('Found nitro button!');
    elem.style.display = 'none';
  } else {
    console.warn('Error: Could not find nitro button!');
    setTimeout(Hide_Nitro_Button_In_Chat, 1000);
  }
}
