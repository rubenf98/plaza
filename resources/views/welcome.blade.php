<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
    <meta name="Description" content="Programador: Rúben Freitas, Categoria: Condominio,
    Localização: Portugal, Madeira, Santa Cruz, Caniço, Cliente: Edificio Plaza II ">
    <link rel="shortcut icon" href="{{{ asset('logo.webp') }}}">
    <title>Plaza II</title>
</head>

<style>
    .full-page-loader {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .full-page-loader>img {
        animation: 1.8s infinite heartbeat;
    }

    @keyframes heartbeat {
        0% {
            transform: scale(1);
        }

        25% {
            transform: scale(1.05);
        }

        50% {
            transform: scale(1);
        }

        75% {
            transform: scale(1.05);
        }

        100% {
            transform: scale(1);
        }
    }
</style>

<body>
    <div id="index">
        <div class="full-page-loader">
            <img width="200" src="/logo.webp" alt="logo" />
        </div>
        <script src="{{mix('js/app.js')}}"></script>
    </div>
</body>



</html>