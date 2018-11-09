<?php

namespace App\Http\Middleware;

use Closure;

class AllowActionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $action)
    {
        $user = $request->user()->with(['roles.actions'])->first();

        foreach ($user['roles'] as $role) {
            foreach ($role['actions'] as $a){
                if($a['title'] === $action) {
                    return $next($request);
                }
            }
        }
    }
}
