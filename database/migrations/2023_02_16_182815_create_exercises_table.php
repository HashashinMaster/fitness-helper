<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exercises', function (Blueprint $table) {
            $table->id();
            $table->foreignId('week_id')->references('id')->on('weeks');
            $table->string('training_day');
            $table->string('action');
            $table->string('muscle')->nullable();
            $table->string('exercise_name')->nullable();
            $table->integer('sets')->nullable();
            $table->integer('repetitions')->nullable();
            $table->integer('weight')->nullable();
            $table->string('video')->nullable();
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exercises');
    }
};
