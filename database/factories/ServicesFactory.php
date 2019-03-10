<?php

use Faker\Generator as Faker;

$factory->define(App\Services::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'desc' => $faker->desc,
        'icon' => $faker->icon,
    ];
});
