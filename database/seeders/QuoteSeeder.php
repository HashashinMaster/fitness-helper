<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\quote;
use Illuminate\Support\Facades\DB;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('quotes')->insert([
            [
                'quote' => 'Strength does not come from physical capacity. It comes from an indomitable will',
                'author' => 'Mahatma Gandhi'
            ],
            [
                'quote' => "Success usually comes to those who are too busy to be looking for it",
                'author' => "Henry David Thoreau"
            ],
            [
                'quote' => "The body achieves what the mind believes",
                'author' => "Erin Gray"
            ],
            [
                'quote' => "Once you are exercising regularly, the hardest thing is to stop it",
                'author' => "Erin Gray"
            ],
            [
                'quote' => "If you don’t make time for exercise, you’ll probably have to make time for illness",
                'author' => "Robin Sharma"
            ],
            [
                'quote' => "The best way to predict the future is to create it",
                'author' => "Abraham Lincoln"
            ],
            [
                'quote' => "All progress takes place outside the comfort zone",
                'author' => "Michael John Bobak"
            ],
            [
                'quote' => "Your body can stand almost anything. It’s your mind that you have to convince",
                'author' => "Michael John Bobak"
            ],
            [
                'quote' => "What seems impossible today will one day become your warm-up.",
                'author' => "Michael John Bobak"
            ],
            [
                'quote' => "I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count",
                'author' => "Muhammad Ali"
            ],
            [
                'quote' => "If you change the way you look at things, the things you look at change",
                'author' => "Wayne Dyer"
            ],
            [
                'quote' => "You just can’t beat the person who never gives up",
                'author' => "Babe Ruth"
            ],
            [
                'quote' => "Do something today that your future self will thank you for",
                'author' => "Sean Patrick Flanery"
            ],
            [
                'quote' => "Push harder than yesterday if you want a different tomorrow",
                'author' => "Sean Patrick Flanery"
            ],
            [
                'quote' => "Don’t say ‘I can’t.’ Say, ‘I presently struggle with",
                'author' => "Tony Horton"
            ],
            [
                'quote' => "Motivation is what gets you started. Habit is what keeps you going",
                'author' => "Jim Ryun"
            ],
            [
                'quote' => "Nobody who ever gave his best regretted it",
                'author' => "George Halas"
            ],
            [
                'quote' => "There are two types of pain in this world: pain that hurts you, and pain that changes you",
                'author' => "George Halas"
            ],
            [
                'quote' => "When you hit failure, your workout has just begun",
                'author' => "Ronnie Coleman"
            ],
            [
                'quote' => "You can either suffer the pain of discipline or the pain of regret",
                'author' => "Jim Rohn"
            ],
            [
                'quote' => "We do not stop exercising because we grow old- we grow old because we stop exercising",
                'author' => "Dr. Kenneth Cooper"
            ],
            [
                'quote' => "li bda bda ola oli mabdach mabdach",
                'author' => "zbiba"
            ]
        ]);
    }
}
