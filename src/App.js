
import React, { useState } from 'react';
import DataFetching from './components/DataFetching';
import './styles/top_select.scss';
import './styles/top_category.scss';
import './styles/app.scss';
import './styles/main_select.scss';
import './styles/category.scss';
import './styles/products.scss';

function App() {
   const [delivery, setDelivery] = useState();
   return (

      <div className='top_select'>


         <span className='top_category'>Обувь
            <img width={30} height={30} src="img/arrow-right.svg"></img> Мужская обувь
         </span>
         <div className='main_select'>
            <h1>Кеды и слипоны мужские</h1>
            <span>20 826 товаров</span>
         </div>

         <div className='categories'>
            <h4>Категории</h4>
            <form>Популярныеㅤㅤㅤㅤㅤ ▾</form>
            <span className='spaned'>Обувь</span>
            <span className='spaned'>Мужчинам</span>

         </div>

         <div className='products'>
            <span  >Кеды кроссовки и слипоны  </span>
            <span >слипоны</span>
            <span >Кеды</span>
            <span >кроссовки</span>
            <h4>Сроки доставки</h4>

            <input type="radio" name="delivery" value="doesnmatter" onChange={e => setDelivery(e.target.value)} /><form>Неважно</form>
            <input type="radio" name="delivery" value="tomorrow" onChange={e => setDelivery(e.target.value)} /> <img width={30} height={30} src="img/rocket.svg"></img><form>ㅤЗавтра</form>
            <input type="radio" name="delivery" value="2day" onChange={e => setDelivery(e.target.value)} /> <form>До 2 дней</form>
            <input type="radio" name="delivery" value="5day" onChange={e => setDelivery(e.target.value)} /><form> До 5 дней</form>
            <h4>Российский размер(обуви)</h4>
            <div className='squareradio'>
               <img width={30} height={30} src="img/choose.svg"></img> <label for="radioA"><input type="radio" name="radio1" value="A" /> 40</label><br />
               <img width={30} height={30} src="img/choose.svg"></img><label for="radioB"><input type="radio" name="radio1" value="B" /> 41</label><br />
               <img width={30} height={30} src="img/choose.svg"></img><label for="radioC"><input type="radio" name="radio1" value="C" /> 42</label><br />
               <img width={30} height={30} src="img/choose.svg"></img> <label for="radioD"><input type="radio" name="radio1" value="D" /> 43</label><br />
               <img width={30} height={30} src="img/choose.svg"></img> <label for="radioE"><input type="radio" name="radio1" value="E" /> 44</label>
            </div>
            <h5>Посмотреть все</h5>
         </div>
         <span className='App'>

            <DataFetching />

         </span>
      </div>

   );

}

export default App;
