setInterval(function(){
        var total_count = document.querySelectorAll('.an').length;

        if( total_count == undefined || total_count == '' )
            total_count = 0;

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