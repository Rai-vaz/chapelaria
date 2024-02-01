<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Ability;

class Role extends Model
{
    use HasFactory;


    public function abilities(){
        //UMA REGRA PODE PERTENCER A VÁRIAS HABILIDADES
        return $this->belongsToMany(Ability::class);

    }


    //ESPERA UMA COLUNA CHAMADA ROLE_ID NA TABELA USERS
    public function user(){
        return $this->hasMany(User::class);
    }


    
}
