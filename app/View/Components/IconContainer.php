<?php

namespace App\View\Components;

use Illuminate\View\Component;

class IconContainer extends Component
{
    
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(public $icon,public $value)
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.icon-container');
    }
}
