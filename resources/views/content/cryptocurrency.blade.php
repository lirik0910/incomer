@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="summary">
      <div class="tag">
        <ul class="tag__list">
          <li class="tag__item"><a class="tag__link" href="#">Bitcoin</a></li>
          <li class="tag__item"><a class="tag__link" href="#">Ethereum</a></li>
          <li class="tag__item"><a class="tag__link" href="#">MYRIG</a></li>
          <li class="tag__item"><a class="tag__link" href="#">ASIC</a></li>
          <li class="tag__item"><a class="tag__link" href="#">GPU майнинг</a></li>
          <li class="tag__item"><a class="tag__link" href="#">AMD</a></li>
        </ul>
      </div>
      <div class="cost">
        <ul class="cost__list">
          <li class="cost__item"> <span>Bitcoin</span><span>$6.8281,50</span></li>
          <li class="cost__item"> <span>Ethereum </span><span>$1.4917,28</span></li>
          <li class="cost__item"> <span>Zcash </span><span>$809,91</span></li>
        </ul>
      </div>
        <div class="sort">
          <ul class="sort__list">
            <li class="sort__item">
              <a class="sort__link" href="#">
                @include('svg.view-list')
              </a>
            </li>
            <li class="sort__item">
              <a class="sort__link sort__link--active" href="#">
                @include('svg.view-thumbs')
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section class="main-news">
        <div class="row">
          <a class="card card--large" href="#">
            <article class="card__article">
              <div class="card__pic">
                <img src="img/man2.png">
              </div>
              <div class="card__content">
                <div class="card__text">
                  <p>Tesla покупает 50% акций Bitmain на сумму $2 млрд</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <div class="faq">
            <p class="faq__title">ЧАВО для чайников</p>
            <ul class="faq__list">
              <li class="faq__item">
                <a class="faq__link" href="#">Что такое криптовалюта?</a>
              </li>
              <li class="faq__item">
                <a class="faq__link" href="#">Где и как ее хранить?</a>
              </li>
              <li class="faq__item">
                <a class="faq__link" href="#">Как и где купить?</a>
              </li>
              <li class="faq__item">
                <a class="faq__link" href="#">Как на этом заработать?</a>
              </li>
              <li class="faq__item">
                <a class="faq__link" href="#">Где потратить?</a>
              </li>
            </ul>
          </div>
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-light.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <form class="exchange">
            <p class="exchange__title">Обмен криптовалют</p>
            <fieldset class="exchange__fieldset">
              <div class="exchange__field">
                <span class="exchange__placeholder">сколько отдаю</span>
                <input class="exchange__input" type="number" required>
              </div>
              <div class="exchange__field exchange__field--select">
                <select class="exchange__select">
                  <option value="btc">BTC</option>
                  <option value="usd">USD</option>
                  <option value="hrn">HRN</option>
                </select>
              </div>
            </fieldset>
            <fieldset class="exchange__fieldset">
              <div class="exchange__field">
                <span class="exchange__placeholder">сколько получу</span>
                <input class="exchange__input" type="number" required>
              </div>
              <div class="exchange__field exchange__field--select">
                <select class="exchange__select">
                  <option value="btc">BTC</option>
                  <option value="usd" selected>USD</option>
                  <option value="hrn">HRN</option>
                </select>
              </div>
            </fieldset>
            <button class="exchange__btn">Обменять</button>
            <p class="exchange__text">Показан самый выгодный курс</p>
          </form>
        </div>
      </section>
    </div>
    <section class="strip">
      <div class="container">
        <div class="strip__header">
          <p class="strip__title">Bitcoin</p>
          <a class="strip__more" href="#">Больше новостей о Bitcoin</a>
        </div>
        <div class="strip__content">
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-dark.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article></a><a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic">
                <img src="img/photo-dark.jpg">
              </div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
    <section class="strip strip--dark">
      <div class="container">
        <div class="strip__header">
          <p class="strip__title">MYRIG</p>
          <a class="strip__more" href="#">Больше новостей о Bitcoin</a>
        </div>
        <div class="strip__content">
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
        </div>
        <div class="strip__content">
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
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
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
    <section class="strip">
      <div class="container">
        <div class="strip__header">
          <p class="strip__title">Ethereum</p>
          <a class="strip__more" href="#">Больше новостей о Ethereum</a>
        </div>
        <div class="strip__content">
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
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-dark.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-light.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-dark.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
    <section class="strip">
      <div class="container">
        <div class="strip__header">
          <p class="strip__title">Майнинг на GPU</p>
          <a class="strip__more" href="#">Больше новостей о майнинге на GPU</a>
        </div>
        <div class="strip__content">
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-light.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-dark.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-light.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
          <a class="card card--square-full-img" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/photo-dark.jpg"></div>
              <div class="card__content">
                <div class="card__text">
                  <p>Facebook презентовал своё первое электронное устройство</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">904</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
@endsection
