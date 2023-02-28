<?php

namespace Database\Factories;

use App\Models\exercise;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ExercisesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = exercise::class;
    public function definition()
    {
        return [
            'week_id' => 1,
            'training_day' => 'Monday',
            'action' => 'rest'
        ];
    }
}
