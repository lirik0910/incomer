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
            <a class="card card--large" href="post.html">
              <article class="card__article">
                <div class="card__pic">
                  <img src="img/man2.png">
                </div>
                <div class="card__content">
                  <div class="card__text">
                    <p class="card__subtitle">Cрочно в номер!</p>
                    <p>Tesla покупает 50% акций Bitmain на сумму $2 млрд</p>
                  </div>
                  <div class="card__statistic">
                    <span class="views">1034</span>
                    <span class="comments">537</span>
                  </div>
                </div>
              </article>
            </a>
            <div class="top__article-wrap">
              <a class="card card--square card--post" href="post.html">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/car.png">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
              <a class="card card--square card--interview" href="post.html">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/man.png">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p class="card__subtitle">Интервью</p>
                      <p class="card__name">Владимир Ястржембский</p>
                      <p class="card__position">AB–Invest, CEO</p>
                    </div>
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
                  <span class="popular__date">Сегодня в 16:39</span>
                  <p class="popular__text">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                </a>
              </li>
              <li class="popular__item"><a class="popular__link" href="#">
                <span class="popular__date">Сегодня в 16:39</span>
                <p class="popular__text">Huawei опубликовали квартальный отчёт. Всё плохо</p></a>
              </li>
              <li class="popular__item"><a class="popular__link" href="#">
                <span class="popular__date">Сегодня в 16:39</span>
                <p class="popular__text">Apple презентовала новые продукты на конференции</p></a>
              </li>
              <li class="popular__item"><a class="popular__link" href="#">
                <span class="popular__date">Сегодня в 16:39</span>
                <p class="popular__text">Производство Tesla 3 достигло 6.000 единиц в сутки</p></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="news-wrap">
          <div class="news">
            <div class="row">
              <a class="card card--long-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/photo-light.jpg">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
              <a class="card card--long-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/photo-dark.jpg">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div class="row">
              <a class="card card--square-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/photo-light.jpg">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
              <a class="card card--square-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/photo-dark.jpg">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
              <a class="card card--square-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/photo-light.jpg">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div class="row">
              <a class="card card--long-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic">
                    <img src="img/photo-dark.jpg">
                  </div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
                  </div>
                </article>
              </a>
              <a class="card card--long-full-img" href="#">
                <article class="card__article">
                  <div class="card__pic"><img src="img/photo-light.jpg"></div>
                  <div class="card__content">
                    <div class="card__text">
                      <p>Facebook презентовал своё первое электронное устройство</p>
                    </div>
                    <div class="card__statistic">
                      <span class="views">1034</span>
                      <span class="comments">537</span>
                    </div>
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
                  @include('svg.play')
                </button>
              </a>
            </li>
            <li class="preview__item">
              <a class="preview__link" href="#">
                <img class="preview__img" src="img/placeholder.png" alt="video-preview">
                <p class="preview__text">Всё о презентации WWDC2018</p>
                <button class="preview__btn">
                  @include('svg.play')
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

