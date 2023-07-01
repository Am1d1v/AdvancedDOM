



const userWrapper = document.querySelector('.user_wrapper');

for(let i = 1; i <= 40; i++){
    const el = document.createElement('div');
    el.textContent = `User with ID ${i}`;
    el.style.color = 'white';
    el.style.fontSize = '20px';
    userWrapper.append(el);
    el.setAttribute('data-id', i);

    /*

    el.addEventListener('click',() => {
        console.log(`Deleted user with ID ${i}`);
        //el.remove(i);
    });

    */
}

userWrapper.addEventListener('click',(e) => {
    const info = e.target.getAttribute('data-id');

    console.log(info);
});