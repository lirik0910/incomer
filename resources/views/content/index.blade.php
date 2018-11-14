@extends('layouts.app')
@section('content')
    <div class="container">
      <div class="tag">
        <ul class="tag__list">
          <li class="tag__item"><a class="tag__link" href="#">Газовый скандал</a></li>
          <li class="tag__item"><a class="tag__link" href="#">elections-scandal</a></li>
          <li class="tag__item"><a class="tag__link" href="#">Тим Кук</a></li>
          <li class="tag__item"><a class="tag__link" href="#">Facebook</a></li>
          <li class="tag__item"><a class="tag__link" href="#">Apple</a></li>
        </ul>
      </div>
      <div class="wrap">
        <div class="main-wrap">
          <div class="aticles-wrap">
            <div class="top">
              <a class="top__link" href="{{ url('/news/35') }}">
                <article class="top__article top__article--right"> 
                  <div class="top__article-pic">
                  	<img src="img/man2.png">
                  </div>
                  <div class="top__article-text">
                  	<span class="top__article-subtitle">Срочно в номер!</span>
                      <p class="top__article-title">Илон Маск заявил о выходе из совета директоров Tesla</p>
                    <span class="views">904</span>
                    <span class="comments">308</span>
                  </div>
                </article>
              </a>
              <div class="top__article-wrap">
              	<a class="top__link top__link--half" href="news.html">
                  <article class="top__article top__article--bottom">
                    <div class="top__article-pic">
                      <img src="img/car.png">
                    </div>
                    <div class="top__article-text">
                      <p class="top__article-title">Apple презентовала новые продукты на конференции WWDC 2018</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
                <a class="top__link top__link--half" href="news.html">
                  <article class="top__article top__article--left">
                    <div class="top__article-text">
                      <span class="top__article-subtitle">Интервью</span>
                      <p class="top__article-name">Василий Долгопрудный</p>
                      <span class="top__article-position">AV-Invest, CEO</span>
                    </div>
                    <div class="top__article-pic">
                    	<img src="img/man.png">
                    </div>
                  </article>
                </a>
              </div>
            </div>
            <div class="popular">
              <p class="block__title">Актуально сейчас</p>
              <ul class="popular__list">
                <li class="popular__item">
                  <a class="popular__link" href="#">
                	<span class="popular__category">Новости</span>
                	<span class="popular__date">Сегодня в 16:39</span>
                       <p class="popular__text">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                    </a>
                </li>
                <li class="popular__item">
                  <a class="popular__link" href="#">
                	<span class="popular__category">Новости</span>
                	<span class="popular__date">Сегодня в 16:39</span>
                       <p class="popular__text">Huawei опубликовали квартальный отчёт. Всё плохо</p>
                    </a>
                </li>
    			<li class="popular__item">
    			  <a class="popular__link" href="#">
    				<span class="popular__category">Новости</span>
    				<span class="popular__date">Сегодня в 16:39</span>
        			<p class="popular__text">Apple презентовала новые продукты на конференции</p>
        			</a>
        		</li>
    			<li class="popular__item">
    			  <a class="popular__link" href="#">
    				<span class="popular__category">Новости</span>
    				<span class="popular__date">Сегодня в 16:39</span>
        			<p class="popular__text">Производство Tesla 3 достигло 6.000 единиц в сутки	</p>
        			</a>
        		</li>
    			<li class="popular__item">
    			  <a class="popular__link" href="#">
    				<span class="popular__category">Новости</span>
    				<span class="popular__date">Сегодня в 16:39</span>
        			<p class="popular__text">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
        			</a>
        		</li>
  			  </ul>
			</div>
          </div>
          <div class="news-wrap">
            <div class="news">
              <div class="news__row">
              	<a class="news__link news__link--long" href="news.html">
                  <article class="news__article news__article--right">
                    <div class="news__article-pic">
                    	<img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
                <a class="news__link news__link--long" href="news.html">
                  <article class="news__article news__article--right">
                    <div class="news__article-pic">
                      <img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
              </div>
              <div class="news__row">
              	<a class="news__link news__link--square" href="news.html">
                  <article class="news__article">
                    <div class="news__article-pic">
                      <img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
                <a class="news__link news__link--square" href="news.html">
                  <article class="news__article">
                    <div class="news__article-pic">
                      <img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
                <a class="news__link news__link--square" href="news.html">
                  <article class="news__article">
                    <div class="news__article-pic">
                      <img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
              </div>
              <div class="news__row">
              	<a class="news__link news__link--long" href="news.html">
                  <article class="news__article news__article--right">
                    <div class="news__article-pic">
                      <img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
                <a class="news__link news__link--long" href="news.html">
                  <article class="news__article news__article--right">
                    <div class="news__article-pic">
                      <img src="img/photo-dark.jpg">
                    </div>
                    <div class="news__article-text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                      <span class="views">904</span>
                      <span class="comments">308</span>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar-wrap">
          <div class="preview">
            <ul class="preview__list">
              <li class="preview__item">
              	<a class="preview__link" href="#">
              	  <img class="preview__img" src="img/placeholder.png" alt="video-preview">
                  <p class="preview__text">Всё о презентации WWDC2018</p>
                  <button class="preview__btn">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 415.346 415.346" style="enable-background:new 0 0 415.346 415.346;" xml:space="preserve">
						<path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
								c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/>
					</svg>
                  </button>
                </a>
              </li>
              <li class="preview__item">
              	<a class="preview__link" href="#">
              	  <img class="preview__img" src="img/placeholder.png" alt="video-preview">
                  <p class="preview__text">Всё о презентации WWDC2018</p>
                  <button class="preview__btn">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 415.346 415.346" style="enable-background:new 0 0 415.346 415.346;" xml:space="preserve">
						<path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
								c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/>
					</svg>
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div class="rating">
            <p class="block__title">Рейтинг компаний</p>
            <ul class="rating__term-list">
              <li class="rating__term">
                <a class="rating__term-link rating__term-link--active" href="#">месяц</a>
              </li>
              <li class="rating__term">
                <a class="rating__term-link" href="#">квартал</a>
              </li>
              <li class="rating__term">
                <a class="rating__term-link" href="#">полугодие</a>
              </li>
              <li class="rating__term">
                <a class="rating__term-link" href="#">год</a>
              </li>
            </ul>
            <div class="rating__tabs">
              <table class="rating__table rating__table--active">
                <tr class="rating__table-row">
                  <th class="rating__table-header">№</th>
                  <th class="rating__table-header">Компания</th>
                  <th class="rating__table-header">за акцию</th>
                  <th class="rating__table-header">рост, %</th>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">01</td>
                  <td class="rating__table-cell">Apple</td>
                  <td class="rating__table-cell">309</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">02</td>
                  <td class="rating__table-cell">Microsoft</td>
                  <td class="rating__table-cell">84</td>
                  <td class="rating__table-cell">29.8</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">03</td>
                  <td class="rating__table-cell">Tesla</td>
                  <td class="rating__table-cell">921</td>
                  <td class="rating__table-cell">27.9</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">04</td>
                  <td class="rating__table-cell">Amazon</td>
                  <td class="rating__table-cell">1089</td>
                  <td class="rating__table-cell">27.6</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">05</td>
                  <td class="rating__table-cell">Samsung</td>
                  <td class="rating__table-cell">821</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">06</td>
                  <td class="rating__table-cell">Huawei</td>
                  <td class="rating__table-cell">95</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">07</td>
                  <td class="rating__table-cell">Micron</td>
                  <td class="rating__table-cell">309</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">08</td>
                  <td class="rating__table-cell">Intel</td>
                  <td class="rating__table-cell">902</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">09</td>
                  <td class="rating__table-cell">Acer</td>
                  <td class="rating__table-cell">721</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">10</td>
                  <td class="rating__table-cell">Xiaomi</td>
                  <td class="rating__table-cell">107</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
              </table>
              <table class="rating__table">
                <tr class="rating__table-row">
                  <th class="rating__table-header">№</th>
                  <th class="rating__table-header">Компания</th>
                  <th class="rating__table-header">за акцию</th>
                  <th class="rating__table-header">рост, %</th>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">01</td>
                  <td class="rating__table-cell">Apple</td>
                  <td class="rating__table-cell">309</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
              </table>
              <table class="rating__table">
                <tr class="rating__table-row">
                  <th class="rating__table-header">№</th>
                  <th class="rating__table-header">Компания</th>
                  <th class="rating__table-header">за акцию</th>
                  <th class="rating__table-header">рост, %</th>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">01</td>
                  <td class="rating__table-cell">Apple</td>
                  <td class="rating__table-cell">309</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
              </table>
              <table class="rating__table">
                <tr class="rating__table-row">
                  <th class="rating__table-header">№</th>
                  <th class="rating__table-header">Компания</th>
                  <th class="rating__table-header">за акцию</th>
                  <th class="rating__table-header">рост, %</th>
                </tr>
                <tr class="rating__table-row">
                  <td class="rating__table-cell">01</td>
                  <td class="rating__table-cell">Apple</td>
                  <td class="rating__table-cell">309</td>
                  <td class="rating__table-cell">30.1</td>
                </tr>
              </table>
              <a class="rating__full-list" href="#">Перейти к рейтингу компаний</a>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection

