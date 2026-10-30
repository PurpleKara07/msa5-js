const next      = document.querySelector('.next');
const clear     = document.querySelector('.clear');
const cardWrap  = document.querySelector('.card_wrap');
let sPage = 0;

const baseUrl   = 'https://picsum.photos';
const path      = '/v2/list';

next.addEventListener('click', async ()=>{
        
    next.disabled = true;
    next.textContent = '로딩중';

    sPage++;    
    
    const url = `${baseUrl}${path}?page=${sPage}&limit=3`;       

    try{        
        const response = await axios.get(url);        

        response.data.forEach((item,idx)=>{
            // console.log(item);
            // 2.card-img
            const cardImg  = document.createElement('div');
            cardImg.classList.add('card-img');
            cardImg.style.backgroundImage = `url('${item.download_url}')`;

            // 3.card-text
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = `${item.id}: ${item.author}`;

            // 1.카드 요소    
            const card = document.createElement('div');
            card.classList.add('card');            
            card.appendChild(cardImg);
            card.appendChild(cardText);

            // 4.cardContainer에 생성한 요소
            cardWrap.appendChild(card);
        });

    }catch(error){
        console.error(error);
    }finally{
        next.disabled = false;
        next.textContent = '다음';
    }
});

clear.addEventListener('click', ()=>{
    cardWrap.textContent = '';    
    sPage = 0;
});

