<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'title' => 'Laravel 10, Inertia.js, Svelte, Tailwind CSS',
        ]);
    }
}
