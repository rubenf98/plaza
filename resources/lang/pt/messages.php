<?php

return [
    'login' => [
        'success' => 'Bem vindo',
        'failCredentials' => 'Não é possível encontrar uma conta com estas credenciais. Verifique se introduziu os dados corretos.',
        'failToken' => 'Erro no login, por favor tente novamente.'
    ],

    'register' => [
        'success' => 'Obrigado por se registar! Verifique o seu email para completar o registo.',
        'failCredencials' => 'Falhou',
        'failAccount' => 'O seu email não se encontra na lista de emails de condóminos. Caso seja um erro contacte a administração.'
    ],

    'logout' => [
        'success' => 'Logout efetuado com sucesso.',
        'fail' => 'Logout falhou, por favor tente novamente',
    ],

    'resetPassword' => [
        'success' => 'Foi enviado um email com um código de reset! Verifique o seu email para completar o processo.',
    ],

    'recoverPassword' => [
        'success' => 'Foi criada uma nova palavra-passe! Verifique o seu email para completar o processo.',
        'fail' => 'Dados inválidos, por favor repita o processo de recuperação.',
    ],
];
