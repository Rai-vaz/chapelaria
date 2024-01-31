<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function delete(User $user){
        if ($user->id == 2) {
            return true;
        }
    }
}
