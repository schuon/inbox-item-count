setInterval(function(){
        if (document.hidden) {
            return;
        }
        var total_count = document.querySelectorAll('.an').length;

        const menu_item = document.querySelector('.hA[role="menuitem"] [title="Inbox"]');
        if (!menu_item) {
            return;
        }

        let txt = 'Inbox';
        if( total_count > 0 ) {
            txt += ' (' + total_count;
            if(total_count % 25 == 0) {
            // TODO find a smarter way to detect if all items are loaded or not
              txt += '+';
            }
            txt += ')';
        }
        if (menu_item.textContent !== txt) {
            menu_item.textContent = txt;
        }
},1000);
