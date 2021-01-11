<?php

namespace App\Jobs;

use App\Mail\ContactMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;


class NotifyContactEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $message;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aUser, $aMessage)
    {
        $this->message = $aMessage;
        $this->user = $aUser;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to('joseruben98@hotmail.com')->queue(new ContactMail($this->user, $this->message));
        Mail::to('abreutati95@hotmail.com')->queue(new ContactMail($this->user, $this->message));
        Mail::to('edificioplazaii@gmail.com')->queue(new ContactMail($this->user, $this->message));
    }
}
