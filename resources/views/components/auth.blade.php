<div class="auth">
    <form class="auth__popup">
        <button class="auth__close">
            @include('svg.close')
        </button>
        <ul class="auth__tabs-list">
            <li class="auth__tab auth__tab--active" data-id="1">Вход</li>
            <li class="auth__tab" data-id="2">Регистрация</li>
        </ul>
        <div class="auth__content-wrap">
            <div class="auth__content">
                <div class="auth__tab-content">
                    <div class="auth__field"><span class="auth__placeholder">Электронная почта</span>
                        <input class="auth__input" type="email">
                    </div>
                    <div class="auth__field auth__pass"><span class="auth__placeholder">Пароль</span>
                        <input class="auth__input" type="password"><a class="auth__pass-btn" href="#">
                            @include('svg.eye')
                        </a>
                    </div>
                    <button class="auth__submit">Войти в аккаунт</button>
                    <button class="auth__restore">Восстановить пароль</button>
                    <p class="auth__text">Войти при помощи социальной сети:</p>
                    <ul class="social">
                        <li class="social__item"><a class="social__link" href="/auth/facebook">
                                @include('svg.facebook')
                            </a></li>
                        <li class="social__item"><a class="social__link" href="/auth/vk">
                                @include('svg.vkontakte')
                            </a></li>
                        <li class="social__item"><a class="social__link" href="/auth/google">
                                @include('svg.google')
                            </a></li>
                    </ul>
                </div>
                <div class="auth__tab-content">
                    <div class="auth__field"><span class="auth__placeholder">Электронная почта</span>
                        <input class="auth__input" type="email">
                    </div>
                    <div class="auth__field"><span class="auth__placeholder">Логин</span>
                        <input class="auth__input" type="text">
                    </div>
                    <div class="auth__field auth__pass"><span class="auth__placeholder">Пароль</span>
                        <input class="auth__input" type="password"><a class="auth__pass-btn" href="#">
                            @include('svg.eye')
                        </a>
                    </div>
                    <button class="auth__submit">Зарегистрироваться</button>
                    <p class="auth__text">Зарегистрироваться через:</p>
                    <ul class="social">
                        <li class="social__item"><a class="social__link" href="/auth/facebook">
                                @include('svg.facebook')
                            </a></li>
                        <li class="social__item"><a class="social__link" href="/auth/vk">
                                @include('svg.vkontakte')
                            </a></li>
                        <li class="social__item"><a class="social__link" href="/auth/google">
                                @include('svg.google')
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </form>
</div>