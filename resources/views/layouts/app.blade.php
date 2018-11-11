<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('base.meta')
</head>

<body>

<div id="root__container" class="root__container">
    @include('base.header')
    @include('components.auth')
    @yield('content')
    @include('base.footer')
</div>
<script type="text/javascript" src="/js/common.js"></script><script type="text/javascript" src="/js/index.js"></script></body>
</body>
</html>
