<div class="email-container" style="max-width: 600px;width: 90%;margin: auto;display: block;">
    @include('emails.common.header')

    <h1 class="title" style="font-weight: normal;">Nova palavra-passe gerada!</h1>
    <div class="text" style="font-size: 1em;">
        Foi criada uma nova palavra passe para a conta que possui este email, utilize-a para realizar login.
        Aconselhamos que altere a palavra-passe fornecida para uma a seu gosto.
    </div>

    <div class="password-container flex-center"
        style="display: block;text-align: center;color: #ff7a5c;margin-top: 30px;font-size: 1.2em;font-weight: bold;">
        {{$password}}
    </div>

    <div class="warning-container flex-center"
        style="display: block;text-align: center;color: gray;font-size: .8em;margin-bottom: 30px;">
        (Caso não tenha efetuado este pedido, contacte a administração)
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