<div class="email-container">
    @include('emails.common.header')

    <h1 class="title">Nova palavra-passe gerada!</h1>
    <div class="text">
        Foi criada uma nova palavra passe para a conta que possui este email, utilize-a para realizar login.
        Aconselhamos que altere a palavra-passe fornecida para uma a seu gosto.
    </div>

    <div class="password-container flex-center">
        {{$password}}
    </div>

    <div class="warning-container flex-center">
        (Caso não tenha efetuado este pedido, contacte a administração)
    </div>

    @include('emails.common.footer')
</div>

<style>
    .email-container {
        max-width: 600px;
        min-width: 200px;
        width: 60%;
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
        color: rgb(236, 1, 140);
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