<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\User;

class UniqueIf implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $user = User::whereEmail($value)->first();
        return !optional($user)->ativo && $value;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Esta conta já efetou registo, caso não se recorde, poderá realizar uma recuperação de palavra-passe';
    }
}
