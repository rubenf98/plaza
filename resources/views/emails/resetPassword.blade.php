<!DOCTYPE html>
<html lang="en">

<body>
    <div class="email-container" style="max-width: 600px;width: 90%;margin: auto;display: block;">
        @include('emails.common.header')

        <h1 class="title" style="font-weight: normal;">
            Esqueceu a sua palavra-passe?
        </h1>

        <div class="text" style="font-size: 1em;">
            Não se preocupe! Vamos lhe fornecer uma nova.
        </div>

        <div class="button-container flex-center">
            <a class="btn-url" href="http://localhost:8000/login?token={{$token}}" style="text-decoration: none;">
                <input class="button btn-slide-line" type="button" value="Reset Password"
                    style="margin: 25px auto;display: block; padding: 24px 36px;outline: none;border: none;text-decoration: none;cursor: pointer;text-transform: uppercase;border-radius: 8px;color: white;background: #ff7a5c;font-weight: bold;font-size: .9em;transition: .4s ease-out;">
            </a>
        </div>

        <div class="warning-container flex-center"
            style="display: block;text-align: center;color: gray;font-size: .8em;margin-bottom: 30px;">
            (Caso não tenha efetuado este pedido, pode ignorar o email)
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