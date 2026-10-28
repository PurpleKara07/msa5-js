const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const page  = e.target.page.value;
    const limit = e.target.limit.value;
});
