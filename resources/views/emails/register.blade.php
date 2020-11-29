<!DOCTYPE html>
<html lang="en">

<body>
    <div class="email-container" style="max-width: 600px;width: 90%;margin: auto;display: block;">
        @include('emails.common.header')

        <h1 class="title" style="font-weight: normal;">Bem vindo!</h1>
        <div class="text" style="font-size: 1em;">
            Obrigado por se registar na plataforma web Plaza II. Foi-lhe atribuída uma palavra-passe, utilize-a para
            realizar login. Aconselhamos que altere a palavra-passe fornecida para uma a seu gosto.
        </div>

        <div class="password-container flex-center"
            style="text-align: center;color: #ff7a5c;margin-top: 30px;font-size: 1.2em;font-weight: bold;display: block">
            {{$password}}
        </div>

        <div class="warning-container flex-center"
            style="text-align: center;color: gray;font-size: .8em;margin-bottom: 30px;">
            (Caso não tenha efetuado registo nesta plataforma, pode ignorar este email)
        </div>

        @include('emails.common.footer')
    </div>
</body>

</html>


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