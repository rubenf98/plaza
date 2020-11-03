<div class="email-container">
    @include('emails.common.header')

    <h1 class="title">
        Esqueceu a sua palavra-passe?
    </h1>

    <div class="text">
        Não se preocupe! Vamos lhe fornecer uma nova.
    </div>

    <div class="button-container flex-center">
        <a class="btn-url" href='http://localhost:8000/login?token={{$token}}'>
            <input class="button btn-slide-line" type="button" value="Reset Password">
        </a>
    </div>

    <div class="warning-container flex-center">
        (Caso não tenha efetuado este pedido, pode ignorar o email)
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

    .warning-container {
        color: gray;
        font-size: .8em;
        margin-bottom: 30px;
    }

    .btn-url {
        text-decoration: none;
    }

    .button {
        margin: 25px auto;
        padding: 24px 36px;
        outline: none;
        border: none;
        text-decoration: none;
        cursor: pointer;
        text-transform: uppercase;
        border-radius: 8px;
        color: white;
        background: #ff7a5c;
        font-weight: bold;
        font-size: .9em;
        transition: .4s ease-out;
    }

    .button:hover {
        background: #fd6442;
        scale: 1.03;
    }
</style>