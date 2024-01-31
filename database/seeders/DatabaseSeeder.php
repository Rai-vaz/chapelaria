<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Role;
use \App\Models\Ability;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(300)->create();

        Ability::factory()->create();

        // $this->call([
        //     UserSeeder::class,
        // ]);
    }
}
