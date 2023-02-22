var acc = document.getElementsByClassName('question')
        var i;
        var len = acc.length;
        for(i = 0; 1 < len; i++) {
            acc[i].addEventListener('click', function() {
                this.classList.toggle('active');
                var answer = this.nextElementSibling;
                if(answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px'
                }
            })
        }