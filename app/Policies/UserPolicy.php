<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function delete(User $user){

        //retorna linha da regra em forma de objeto
        $role = $user->role;

        //retorna array com cada linha da habilidade em forma de objeto
        $habilidades = $role->abilities;

        // if ($role->type == 'Admin') {
        //     return true;
        // }

        foreach($habilidades as $habilidade){
            if ($habilidade->name == 'delete_user') {
                return true;
            }else{
                return false;
            }
        }
    }
}
