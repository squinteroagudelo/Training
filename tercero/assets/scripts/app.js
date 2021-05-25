let close = document.querySelectorAll('.close');

close.forEach((c) => {
    c.addEventListener('click', (e) => {
        e.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove('animate__zoomIn');
        content.classList.add('animate__fadeOutUp');

        setTimeout(() => {
            location.href = '../';
        }, 600);

        return false;
    });
});

// Star editTable
const edit_percent = document.querySelectorAll(".fa-edit");

for (const icon of edit_percent) {
    icon.addEventListener('click', (e) => {
        e.target.classList.add('pe-none');
        let tr;
        for (const eKey in e.path) if(e.path[eKey].nodeName === 'TR') tr = e.path[eKey]
        for (let el of tr.children){
            let classEl = el.classList.value ? el.classList[0].split('_')[1] : 0
            if (classEl === 0) continue
            let old_value = el.textContent;
            let element = document.createElement(classEl);
            element.classList.add('text-center', 'w-100', 'm-0', 'p-0');
            element.setAttribute('placeholder', old_value);
            element.style.outline = 'none';
            el.textContent = '';
            el.appendChild(element);
            element.focus();

            element.addEventListener('keyup', (event) => {
                if ((event.code === 'Enter' || event.code === 'NumpadEnter') && !event.shiftKey) {
                    removeElement(event.target, e.target, tr, old_value);
                }
            });
        }
    });

    function removeElement(el, icon, tr, old_value){
        if (el.nodeName === 'INPUT'){
            if (el.value === ''){
                el.parentNode.textContent = old_value;
            }else{
                let newValue = el.value;
                el.parentNode.textContent = newValue;
            }
        }else{
            console.log(el)
            if (el.value === ''){
                el.parentNode.textContent = old_value;
            }else{
                let newValue = el.value;
                el.parentNode.textContent = newValue;
            }
        }

        icon.classList.remove('pe-none');
    }
}
// End editTable