<?php

namespace Database\Factories;

use App\Models\week;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class WeeksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = week::class;
    public function definition()
    {
        return [
            'program_id' => 1
        ];
    }
}
