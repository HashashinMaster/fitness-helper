<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Ress extends Component
{
    public $filename;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($filename)
    {
        $this->filename = $filename;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.ress');
    }
}
