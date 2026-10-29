// https://picsum.photos/v2/list?page=2&limit=100
const form = document.querySelector('form');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const baseUrl   = 'https://picsum.photos';
    const path      = '/v2/list';

    const page  = e.target.page.value;
    const limit = e.target.limit.value;

    const url = `${baseUrl}${path}?page=${page}&limit=${limit}`;

    try{
        const response = await axios.get(url);
        // console.log(response);
        // <div class="card">
        //     <div class="card-img"></div>            
        //     <p class="card-text">1: 아아아아</p>                
        // </div> 
        
        // 카드를 넣을 컨테이너 요소
        const cardContainer = document.querySelector('.card-container');
        cardContainer.textContent = '';

        response.data.forEach((item,idx) => {            
            // 2.card-img
            const cardImg   = document.createElement('div');
            cardImg.classList.add('card-img');
            cardImg.style.backgroundImage = `url('${item.download_url}')`;

            // 3.card-text
            const cardText  = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = `${item.id}: ${item.author}`;
                        
            // 1.카드 요소    
            const card = document.createElement('div');
            card.classList.add('card');            
            card.appendChild(cardImg);
            card.appendChild(cardText);

            // 4.cardContainer에 생성한 요소
            cardContainer.appendChild(card);
        });
    }catch(error){
        console.error(error);
    }    
});
