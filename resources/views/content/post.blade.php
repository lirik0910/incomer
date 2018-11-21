@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="wrap">
      <article class="post">
        <h1 class="post__title">Илон маск заявил о своём скором выходе из совета директоров Tesla после давления властей </h1>
        <div class="post__info">
          <time class="post__date">Сегодня в 12:43</time>
          <span class="views views--light">904</span>
          <span class="comments comments--light">67</span>
        </div>
        <div class="post__pic">
          <img src="img/photo-dark.jpg">
        </div>
        <div class="post__text">
          <p>Баскетбольный клуб «Мариуполь» обыграл «Нико Баскет» из Николаева со счетом 97:90. Об этом на Facebook сообщил начальник учебно-спортивного отдела управления молодежи и спорта Георгий Федоренко.</p>
          <p>Вчера мариупольская команда в рамках третьего тура чемпионата Украины потерпела поражение со счетом 92:95. Но на повторной встрече мариупольцы сполна реабилитировались. Весь поединок баскетболисты «Мариуполя» контролировали ход игры, владея преимуществом до 20 очков. «Нико Баскет» попытались безуспешно отыграться в конце матча.</p>
        </div>
        <h2 class="post__subtitle">Причины кризиса</h2>
        <div class="post__text">
          <p>«Прекрасная победа <a href='#'>МБК "Мариуполь"</a>, которая подтвердила высокий класс мариупольского баскетбола на национальном уровне», - отметил Георгий Федоренко.</p>
          <p>Теперь же появилась возможность также заполнить интерактивную форму заявления, указав свои персональные данные. После обработки информации онлайн-сервис сгенерирует соответствующую форму с QR-кодом, который уже на месте считает сотрудник ГМСУ, и информация попадет в базу данных. Сотрудникам ведомства нужно будет лишь сверить правильность внесенных данных. </p>
          <blockquote>Нет, — быстро сказал он. — Только не это. Остаться друзьями? Развести огородик на остывшей лаве угасших чувств? Нет, это не для нас с тобой. Так бывает только после маленьких интрижек, да и то получается довольно фальшиво. Любовь не пятнают дружбой. Конец есть конец.</blockquote>
          <cite>Эрих Мария Ремарк «Триумфальная арка»</cite>
          <p>«Прекрасная победа МБК "Мариуполь", которая подтвердила высокий класс мариупольского баскетбола на национальном уровне», - отметил Георгий Федоренко.</p>
          <p>Теперь же появилась возможность также заполнить интерактивную форму заявления, указав свои персональные данные. После обработки информации онлайн-сервис сгенерирует соответствующую форму с QR-кодом, который уже на месте считает сотрудник ГМСУ, и информация попадет в базу данных. Сотрудникам ведомства нужно будет лишь сверить правильность внесенных данных. </p>
          <a class="post__preview-link" href="#">
            <img class="post__preview-img" src="img/raccoon.jpg" alt="news-video-preview">
            <button class="post__preview-btn">
              @include('svg.play')
            </button>
          </a>
          <p>«Прекрасная победа МБК "Мариуполь", которая подтвердила высокий класс мариупольского баскетбола на национальном уровне», - отметил Георгий Федоренко. Теперь же появилась возможность также заполнить интерактивную форму заявления, указав свои персональные данные. </p>
        </div>
        <button class="post__comment-btn">Читать комментарии</button>
      </article>
      <div class="sidebar-news">
        <p class="sidebar-news__title">Похожие новости</p>
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
    </div>
  </div>
  <div class="related">
    <div class="container">
      <p class="related__title">Новости, похожие на эту</p>
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
          <div class="card__pic"><img src="img/photo-dark.jpg"></div>
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
  </div>
@endsection
