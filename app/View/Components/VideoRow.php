<?php

namespace App\View\Components;

use Illuminate\View\Component;

class VideoRow extends Component
{
    public $exercise;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($exercise)
    {
        $this->exercise = $exercise;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.video-row');
    }
}
