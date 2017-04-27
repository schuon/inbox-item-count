setInterval(() => {
    if (document.hidden) {
        return;
    }
    const total_count = document.querySelectorAll('.an').length;

    const menu_item = document.querySelector('.hA[role="menuitem"] [title="Inbox"]');
    if (!menu_item) {
        return;
    }

    // TODO find a smarter way to detect if all items are loaded or not
    const has_more_items = total_count % 25 == 0;

    let txt = 'Inbox';
    if (total_count > 0) {
        txt += ` (${total_count}${has_more_items ? '+' : ''})`;
    }
    if (menu_item.textContent !== txt) {
        menu_item.textContent = txt;
    }
}, 1000);
