<?php

namespace Database\Factories;

use App\Models\program;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProgramsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = program::class;
    public function definition()
    {
        return [
            'number_of_weeks' => 1

        ];
    }
}
