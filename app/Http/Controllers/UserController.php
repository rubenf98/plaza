<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
    {
        return UserResource::collection(User::all());
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $validator = $request->validated();

        $user->update($validator);

        return new UserResource($user);
    }
}
