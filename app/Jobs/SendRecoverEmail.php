<?php

namespace App\Jobs;

use App\Mail\RecoverPasswordMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendRecoverEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;
    protected $password;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aEmail, $aPassword)
    {
        $this->email = $aEmail;
        $this->password = $aPassword;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->email)->queue(new RecoverPasswordMail($this->password));
    }
}
