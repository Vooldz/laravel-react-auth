<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->company;
        $slug = Str::slug($name) . '-' . uniqid(); 
        return [
            "name" => $name,
            "slug" => $slug,
            "price"=> $this->faker->randomFloat(2,90,10000),
            "description" => $this->faker->text,
            "image" => $this->faker->imageUrl,
        ];
    }
}
