@extends('layouts.app')
@section('content')
    <div class="container">
      <div class="wrap">
        <article class="post">
          <h1 class="post__title">Илон маск заявил о своём скором выходе из совета директоров Tesla после давления властей</h1>
          <div class="post__info">
            <time class="post__date">Сегодня в 12:43</time>
            <span class="views views--light">904</span>
            <span class="comments comments--light">67</span>
          </div>
          <div class="post__pic">
          	<img src="{{ url('img/photo-dark.jpg')  }} ">
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
              <img class="post__preview-img" src="/img/raccoon.jpg" alt="news-video-preview">
              <button class="post__preview-btn">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 415.346 415.346" style="enable-background:new 0 0 415.346 415.346;" xml:space="preserve">
						<path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697
								c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/>
				</svg>
              </button>
            </a>
            <p>«Прекрасная победа МБК "Мариуполь", которая подтвердила высокий класс мариупольского баскетбола на национальном уровне», - отметил Георгий Федоренко. Теперь же появилась возможность также заполнить интерактивную форму заявления, указав свои персональные данные. </p>
          </div>
          <button class="post__comment-btn">Читать комментарии</button>
        </article>
        <div class="related">
          <p class="related__title">Похожие новости </p>
          <a class="related__link related__link--square" href="#">
            <article class="related__article">
              <div class="related__pic">
                <img src="/img/photo-light.jpg">
              </div>
              <div class="related__text">
                <p>Facebook презентовал своё первое электронное устройство</p>
                <span class="views">904</span>
                <span class="comments">308</span>
              </div>
            </article>
          </a>
          <a class="related__link related__link--square" href="#">
            <article class="related__article">
              <div class="related__pic">
              	<img src="/img/photo-dark.jpg">
              </div>
              <div class="related__text">
                <p>Facebook презентовал своё первое электронное устройство</p>
                <span class="views">904</span>
                <span class="comments">308</span>
              </div>
            </article>
          </a>
          <a class="related__link related__link--square" href="#">
            <article class="related__article">
              <div class="related__pic">
              	<img src="/img/photo-light.jpg">
              </div>
              <div class="related__text">
                <p>Facebook презентовал своё первое электронное устройство</p>
                <span class="views">904</span>
                <span class="comments">308</span>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
@endsection
