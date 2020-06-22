<div class="email-container">
    <div class="image-container flex-center">
        <img src="https://www.priberam.com/wp-content/uploads/LOGO-PRIBERAM-CORES.png">
    </div>

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

    <div class="footer-container text">
        Outra informação importante, que não comunicamos por email, está disponível após login.
    </div>
    <br>
    <div class="footer-container text">
        Cumprimentos, <p class="footer">Administração Plaza II</p>
    </div>
</div>

<style>
    .email-container {
        max-width: 600px;
        min-width: 200px;
        width: 60%;
        margin: auto;
        display: block;
    }

    .image-container {
        width: 50%;
        margin: auto;
        display: block;
        margin-bottom: 50px;
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
        color: rgb(236, 1, 140);
        text-decoration: underline;
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