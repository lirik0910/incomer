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
              <div class="card__pic"><img src="img/man2.png"></div>
              <div class="card__content">
                <div class="card__text">
                  <p class="card__subtitle">Cрочно в номер!</p>
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
        </div>
        <div class="row">
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
          <a class="card card--large" href="#">
            <article class="card__article">
              <div class="card__pic"><img src="img/man2.png"></div>
              <div class="card__content">
                <div class="card__text">
                  <p class="card__subtitle">Эксклюзив!</p>
                  <p>Tesla покупает 50% акций Bitmain на сумму $2 млрд</p>
                </div>
                <div class="card__statistic">
                  <span class="views-post">1034</span>
                  <span class="comments-post">537</span>
                </div>
              </div>
            </article>
          </a>
        </div>
        <div class="row">
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
        </div>
        <button class="more">Показать ещё</button>
      </section>
    </div>
@endsection
