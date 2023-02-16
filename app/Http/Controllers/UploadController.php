<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadVideo(Request $request){
        if($request->file('video') != null)
            $mimeType = $request->file('video')->getMimeType();
        else
            $mimeType = $request->file('image')->getMimeType();
        $path = "";
        try {
             if (explode('/',$mimeType)[0] == "image"){
                $path = $request->file('image')->store('public/uploads/images');
            }
            else{
                $path = $request->file('video')->store('public/uploads/videos');
            }
            
        } catch (\Throwable $th) {
            return [
                "success" => false,
                "message" => "file is too large!"
            ];
        }
        

    if($path)
         return [
            "success" => true,
            "path" => str_replace('public','storage',$path),
        ];
        else
        return [
            "success" => false,
            "message" => "something is wrong with your request. try again!"
        ];
    } 
}
