setInterval(function(){
        if (document.hidden) {
            return;
        }
        var total_count = document.querySelectorAll('.an').length;

        nodes = document.querySelectorAll('li.hA span.sM');
        if( total_count > 0 ) {
            txt = 'Inbox (' + total_count;
            if(total_count % 25 == 0) {
            // TODO find a smarter way to detect if all items are loaded or not
              txt += '+';
            }
            txt += ')';
            nodes[0].innerText = txt
        } else {
            nodes[0].innerText = 'Inbox';
        }
},1000);
