<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Role;



class Ability extends Model
{
    use HasFactory;

    public function roles(){
        //UMA HABILIDADE PODE PERTENCER A VÁRIAS REGRAS
        return $this->belongsToMany(Role::class);
    }
}
