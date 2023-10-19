const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector)

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-styles')
            this.nextElementSibling.classList.toggle('active-content')

            if (this.classList.contains('active-styles')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px'
            }
        })
    })







    // const blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown')
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-styles')
    //             })
    //             this.classList.add('active', 'active-styles')
    //         }
    //     })
    // })


}

export default accordion; 