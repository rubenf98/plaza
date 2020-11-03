<div class="email-container">
    @include('emails.common.header')

    <h1 class="title">Bem vindo!</h1>
    <div class="text">
        Obrigado por se registar na plataforma web Plaza II. Foi-lhe atribuída uma palavra-passe, utilize-a para
        realizar login. Aconselhamos que altere a palavra-passe fornecida para uma a seu gosto.
    </div>

    <div class="password-container flex-center">
        {{$password}}
    </div>

    <div class="warning-container flex-center">
        (Caso não tenha efetuado registo nesta plataforma, pode ignorar este email)
    </div>

    @include('emails.common.footer')
</div>

<style>
    .email-container {
        max-width: 600px;
        width: 90%;
        margin: auto;
        display: block;
    }

    .title {
        font-weight: normal;
    }

    .text {
        font-size: 1em;
    }

    .footer {
        font-weight: bold;
        margin-top: 3px;
    }

    .flex-center {
        display: flex;
        justify-content: center;
    }

    .password-container {
        color: #ff7a5c;
        margin-top: 30px;
        font-size: 1.2em;
        font-weight: bold;
    }

    .warning-container {
        color: gray;
        font-size: .8em;
        margin-bottom: 30px;
    }
</style>