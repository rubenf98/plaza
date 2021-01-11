<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $userMessage;
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aUser, $aMessage)
    {
        $this->user = $aUser;
        $this->userMessage = $aMessage;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.contact')->subject('Mensagem Plaza II');
    }
}
